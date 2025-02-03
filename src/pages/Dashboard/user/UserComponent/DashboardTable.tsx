import { Button, Space, Table, TableColumnsType, TableProps } from 'antd';
import {  useGetMyOrderQuery } from '../../../../redux/features/user/userApi';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useAppDispatch } from '../../../../redux/hook';
import { baseApi } from '../../../../redux/api/baseApi';
import { useDeleteOrderMutation } from '../../../../redux/features/admin/adminApi';
import { TQueryParam } from '../../../../types/global';

const DashboardTable = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data: myOrderData, isFetching } = useGetMyOrderQuery(params, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const [page, setPage] = useState(1);
 
  const [deleteOrder] = useDeleteOrderMutation();
  const [tableData, setTableData] = useState<TTableData[]>([]);

  console.log('order data',myOrderData)
  // Update tableData when myOrderData changes
  useEffect(() => {
    if (myOrderData?.data) {
      setTableData(
        myOrderData.data.flatMap((order) =>
          order.cars.map(({ _id, car, quantity }) => ({
            key: _id,
            orderId: order._id,
            transactionId: order.transaction.id,
            email: order.email,
            brand: car?.brand || "N/A",
            model: car?.model || "N/A",
            quantity,
            price: car?.price ? car.price * quantity : 0,
            orderDate: moment(order.createdAt).format('DD-MM-YYYY'),
            status: order.status,
          }))
        )
      );
    }
  }, [myOrderData]);

  const handleDelete = async (id: string) => {
    try {
      await deleteOrder(id).unwrap();
      toast.success('Order deleted successfully');

   
      // Refetch data immediately
      // await refetch();

      // Optional: Optimistically update tableData
      setTableData((prevData) => prevData.filter((item) => item.orderId !== id));
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Transaction ID',
      key: 'transactionId',
      dataIndex: 'transactionId',
    },
    {
      title: 'Customer Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Brand',
      key: 'brand',
      dataIndex: 'brand',
    },
    {
      title: 'Model',
      key: 'model',
      dataIndex: 'model',
    },
    {
      title: 'Quantity',
      key: 'quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'Price',
      key: 'price',
      dataIndex: 'price',
    },
    {
      title: 'Order Date',
      key: 'orderDate',
      dataIndex: 'orderDate',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status) => (
        <span
          className={`px-2 py-1 rounded-md ${
            status === "Paid" ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'x',
      render: (item) => (
        <Space>
          {item.status === 'Paid' ? (
            <Link to={`/orders/verify?order_id=${item.transactionId}`}>
              <Button>View Details</Button>
            </Link>
          ) : (
            <Button onClick={() => handleDelete(item.orderId)}>Cancel</Button>
          )}
        </Space>
      ),
    },
  ];

  const onChange: TableProps<TTableData>['onChange'] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    console.log({ filters, extra });
  };

  return (
    <div className='border-1 border-gray-200 shadow-lg rounded-md text-center md:text-left py-6 px-1'>
      <h1 className='text-center text-2xl font-bold mt-2 mb-2'>My Orders</h1>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default DashboardTable;