import { Button, Space, Table, TableColumnsType, TableProps } from 'antd';


import { useEffect, useState } from 'react';
import moment from 'moment';
import { Link, NavLink } from 'react-router-dom';


import { toast } from 'sonner';
import { useViewOrdersQuery } from '../../../redux/features/admin/adminApi';


export type TTableData = {
  key: string;
  email: string;
  brand: string;
  model: string;
  quantity: number;
  price: number;
  orderDate: string;
};





const ViewOrders= () => {
  // const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data: myOrderData, refetch } = useViewOrdersQuery(undefined);

  console.log(myOrderData)

useEffect(() => {
  refetch();
}, [refetch]);

// const [updateOrderStatus, { isLoading: isUpdating }] = useUpdateOrderStatusMutation();

// const [createOrder] = useCreateOrderMutation()

// const handlePlaceOrder = async (item) => {
//   try {
//     console.log("Processing payment for:", item);

//     // Send the order details including price to backend
//     const response = await createOrder({
//       cars: [{ car: item.key, quantity: item.quantity }],
//       price: item.price, // Ensure you're sending price as part of the order
//     }).unwrap();

//     console.log("API Response:", response);

//     if (response.success && response.data) {
//       // Redirect to SurjoPay
//       window.location.href = response.data;
//     } else {
//       toast.error("Failed to initiate payment.");
//     }
//   } catch (error) {
//     console.error("Payment Error:", error);
//     toast.error("Something went wrong. Please try again.");
//   }
// };

const tableData: TTableData[] | undefined = myOrderData?.data?.flatMap((order) =>
  order.cars?.map(({ _id, car, quantity }) => {
    // Check if car is missing or null
    if (!car) {
      console.warn(`Car is missing for order ${order._id}`); // Log the issue to debug
      return null; // Skip this record if car is missing
    }

    // Check if car properties are valid before using them
    const price = car?.price ? car.price * quantity : 0; // Avoid accessing price if car is invalid

    return {
      key: _id,
      orderId: order._id,
      transactionId: order.transaction?.id || "N/A",  // Ensure safe access to transaction id
      email: order.email || "N/A", // Handle missing email
      brand: car?.brand || "N/A",  // Default value for missing brand
      model: car?.model || "N/A",  // Default value for missing model
      quantity,
      price, // Price calculation if car is available
      orderDate: moment(order.createdAt).format('DD-MM-YYYY'),
      status: order.status || "Pending",  // Default status if missing
    };
  }).filter((item) => item !== null) // Remove null records from the list
);

console.log("Table Data:", tableData); // Log to verify the table data structure



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
       
          <Link to={`/order-details/${item.orderId}`}>
            <Button>View Details</Button>
          </Link>
        
        
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
      // loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      scroll={{ x: 'max-content' }}
    />
  </div>
  );
};

export default ViewOrders;