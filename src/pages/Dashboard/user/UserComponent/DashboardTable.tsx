import { Button, Space, Table, TableColumnsType, TableProps } from 'antd';

import { useGetMyOrderQuery } from '../../../../redux/features/user/userApi';

import { useEffect,} from 'react';
import moment from 'moment';
import { Link} from 'react-router-dom';

import { useCreateOrderMutation} from '../../../../redux/features/order/orderApi';

import { toast } from 'sonner';






const DashboardTable= () => {
  // const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data: myOrderData,isFetching } = useGetMyOrderQuery(undefined,{
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true
  });

  console.log(myOrderData)


// const [updateOrderStatus, { isLoading: isUpdating }] = useUpdateOrderStatusMutation();

const [createOrder] = useCreateOrderMutation()

const handlePlaceOrder = async (item) => {
  try {
    console.log("Processing payment for:", item);

    // Send the order details including price to backend
    const response = await createOrder({
      cars: [{ car: item.key, quantity: item.quantity }],
      price: item.price, // Ensure you're sending price as part of the order
    }).unwrap();

    console.log("API Response:", response);

    if (response.success && response.data) {
      // Redirect to SurjoPay
      window.location.href = response.data;
    } else {
      toast.error("Failed to initiate payment.");
    }
  } catch (error) {
    console.error("Payment Error:", error);
    toast.error("Something went wrong. Please try again.");
  }
};

const tableData: TTableData[] | undefined = myOrderData?.data?.flatMap((order) =>
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
);


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
  // {
  //   title: 'Action',
  //   key: 'status',
  //   dataIndex: 'status',
  //   render: (status) => (
  //     <span
  //       className={`px-2 py-1 rounded-md ${
  //         status === "Paid" ? "bg-green-500 text-white" : "bg-red-500 text-white"
  //       }`}
  //     >
  //       {status}
  //     </span>
  //   ),
  // },
 
  {
    title: 'Action',
    key: 'x',
    render: (item) => (
      <Space>
        {item.status === 'Paid' ? (
          <Link to={`/order-details/${item.orderId}`}>
            <Button>View Details</Button>
          </Link>
        ) : (
          <Button onClick={() => handlePlaceOrder(item)}>
            Pay Now
          </Button>
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
    console.log({filters,extra})

    // if(extra.action=== 'filter'){
    //   const queryParams :TQueryParam[] = []
    //   filters.brand?.forEach((item) => 
    //     queryParams.push({name:'brand', value:item}
    //   ));

    //   filters.model?.forEach((item) =>
    //         queryParams.push({ name: 'model', value: item })
    //       );
        
          
    //   setParams(queryParams)
     
    // }
    
   
  };

  return (
  <div className='border-1 border-gray-200 shadow-lg rounded-md  text-center md:text-left py-6 px-1'>
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