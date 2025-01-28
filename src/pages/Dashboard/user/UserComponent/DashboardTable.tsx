import { Button, Table, TableColumnsType, TableProps } from 'antd';
import { TQueryParam } from '../../../../types/global';
import { useGetMyOrderQuery } from '../../../../redux/features/user/userApi';
import { TOrder, TOrderData, TTableData } from '../../../../types/users.types';
import { useState } from 'react';
import moment from 'moment';


export type TTableData = Pick<
  TOrder,
  'email' | 'car' | 'quantity' | 'totalPrice'
>;



const DashboardTable= () => {
  // const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data: myOrderData, isFetching } = useGetMyOrderQuery(undefined);


  console.log(myOrderData)

 // Ensure `myOrderData?.data` has the correct type
 const tableData = myOrderData?.data?.map(
  ({ _id,email,car,quantity,totalPrice,createdAt }) => ({
    key: _id,
    email,
    brand: `${car.brand} `,
    model: `${car.model} `,
    category: `${car.category} `,
    quantity,
    price: totalPrice,
    orderDate: moment(new Date(createdAt)).format('MMMM'),
    
  })
);


  
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Brand',
      key: 'brand',
      dataIndex: 'brand',
      // filters: [
      //   {
      //     text: 'Tata',
      //     value: 'Tata',
      //   },
      //   {
      //     text: 'BMW',
      //     value: 'BMW',
      //   },
      //   {
      //     text: 'Audi',
      //     value: 'Audi',
      //   },
      //   {
      //     text: 'Toyota',
      //     value: 'Toyota',
      //   },
      // ],
    },
    {
      title: 'Model',
      key: 'model',
      dataIndex: 'model',
      // filters: [
      //   {
      //     text: '3 Series',
      //     value: '3 Series',
      //   },
      //   {
      //     text: 'Croy',
      //     value: 'Croy',
      //   },
       
      // ],
    },
    {
      title: 'Category',
      key: 'category',
      dataIndex: 'category',
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
      key: 'x',
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
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