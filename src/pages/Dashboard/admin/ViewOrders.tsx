import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from 'antd';
import { useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useDeleteCarMutation, useDeleteOrderMutation, useViewOrdersQuery } from '../../../redux/features/admin/adminApi';
import { TQueryParam } from '../../../types/global';

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
  orderTime: string;
  status: string;
};

const ViewOrders = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);


  const { data: OrderData,refetch } = useViewOrdersQuery(
    [{ name: 'page', value: page }, 
      { name: 'sort', value: '-createdAt' }, ...params],
    {
      skipPollingIfUnfocused:true,
      pollingInterval:30000,
      refetchOnFocus:true,
      refetchOnMountOrArgChange:true,
      refetchOnReconnect:true,
    }
  );

  console.log(OrderData)

  const [deleteOrder] = useDeleteOrderMutation()


  const handleDelete = async (id: string) => {
    try {
      const res = await deleteOrder(id);
      if ('error' in res) {
        toast.error(res.error.data.message || 'Delete failed');
      } else {
        toast.success(res.data.message || 'Order deleted successfully');
        await refetch();
      }
    } catch {
      toast.error('Something went wrong');
    }
  };

  const tableData: TTableData[] | undefined = OrderData?.data?.flatMap((order) =>
    order.cars?.map(({ _id, car, quantity }) => ({
      key: _id,
      orderId: order._id,
      transactionId: order.transaction?.id || 'N/A',
      email: order.email || 'N/A',
      brand: car.brand || 'N/A',
      model: car.model || 'N/A',
      quantity,
      price: car.price ? car.price * quantity : 0,
      orderDate: moment(order.createdAt).format('DD-MM-YYYY'),
      orderTime: moment(order.createdAt).format('hh:mm A'),
      status: order?.transaction.bank_status || 'Pending',
    }))
  );

  const columns: TableColumnsType<TTableData> = [
    { title: 'Transaction ID', key: 'transactionId', dataIndex: 'transactionId' },
    { title: 'Customer Email', key: 'email', dataIndex: 'email' },
    { title: 'Brand', key: 'brand', dataIndex: 'brand' },
    { title: 'Model', key: 'model', dataIndex: 'model' },
    { title: 'Quantity', key: 'quantity', dataIndex: 'quantity' },
    { title: 'Price', key: 'price', dataIndex: 'price' },
    { title: 'Order Date', key: 'orderDate', dataIndex: 'orderDate' },
    { title: 'Order Time', key: 'orderTime', dataIndex: 'orderTime' },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status) => (
        <span
          className={`px-2 py-1 rounded-md ${
            status === 'Success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
        >
          {status === 'Success' ? 'Paid' : status}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'x',
      render: (item) => (
        <Space>
          {item.status === 'Success' ? (
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
      <h1 className='text-center text-2xl font-bold mt-2 mb-2'>All Orders</h1>
      <Table
        // loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
        scroll={{ x: 'max-content' }}
      />
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={OrderData?.meta?.limit}
        total={OrderData?.meta?.total}
      />
    </div>
  );
};

export default ViewOrders;
