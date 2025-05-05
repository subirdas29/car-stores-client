/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from 'antd';

import { useEffect, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

import { TQueryParam } from '../../../../types/global';
import { useDeleteOrderMutation, useGetMyOrderQuery } from '../../../../redux/features/order/orderApi';

export type TTableData = {
  key: string;
  orderId: string;
  transactionId: string;
  email: string;
  brand: string;
  model: string;
  quantity: number;
  price: number;
  orderDate: string;
  status: 'Pending' | 'Paid' | 'Shipped' | 'Completed' | 'Cancelled';
};

const DashboardTable = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
    const [page, setPage] = useState(1);

  const { data: myOrderData, isFetching } = useGetMyOrderQuery( [
    { name: 'page', value: page },
    { name: 'sort', value: '-createdAt' },
    ...params,
  ], {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const [deleteOrder] = useDeleteOrderMutation();
  const [tableData, setTableData] = useState<TTableData[]>([]);

  useEffect(() => {
    if (myOrderData?.data) {
      setTableData(
        myOrderData.data.flatMap((order) =>
          order.cars.map(({ _id, car, quantity }) => ({
            key: `${order._id}-${_id}`,
            id:_id,
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

  const handleDelete = async (id: string,carIdToDelete:string) => {
    try {
      await deleteOrder({orderId:id, carIdToDelete}).unwrap();
      toast.success('Order deleted successfully');
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
      fixed: 'left',
      dataIndex: 'brand',
    },
    {
      title: 'Model',
      key: 'model',
      fixed: 'left',
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
      fixed: 'right',
      dataIndex: 'status',
      render: (status) => (
        <span
          className={`px-2 py-1 rounded-md ${status === "Paid" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
        >
          {status}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'x',
      fixed: 'right',
      render: (item) => 
        {
          return (
            <Space>
              {item.status === 'Paid' ? (
                <Link to={`/orders/verify?order_id=${item.transactionId}`}>
                  <Button>View Details</Button>
                </Link>
              ) : (
                <Button onClick={() => handleDelete(item.orderId,item.id)}>Cancel</Button>
              )}
            </Space>
          );
        },
    },
  ];

  const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
    if (extra.action === 'filter') {
      const queryParams: TQueryParam[] = [];
      filters.brand?.forEach((item) => queryParams.push({ name: 'brand', value: item }));
      filters.model?.forEach((item) => queryParams.push({ name: 'model', value: item }));
      setParams(queryParams);
      setPage(1);
    }
  };

  return (
    <div className='border-1 border-gray-200 shadow-lg rounded-md text-center md:text-left py-6 px-1'>
      <h1 className='text-center text-2xl font-bold mt-2 mb-2'>My Orders</h1>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
        scroll={{ x: 'max-content' }}
      />
       <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={myOrderData?.meta?.limit}
        total={myOrderData?.meta?.total}
      />
    </div>
  );
};

export default DashboardTable;
