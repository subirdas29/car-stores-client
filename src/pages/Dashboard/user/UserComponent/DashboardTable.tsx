import { Button, Table, TableColumnsType, TableProps } from 'antd';
import { TQueryParam } from '../../../../types/global';
import { useGetMyOrderQuery } from '../../../../redux/features/user/userApi';
import { TCar, TOrder, TOrderCar, TOrderData, TTableData } from '../../../../types/users.types';
import { useEffect, useState } from 'react';
import moment from 'moment';


export type TTableData = {
  key: string;
  email: string;
  brand: string;
  model: string;
  quantity: number;
  price: number;
  orderDate: string;
};




const DashboardTable= () => {
  // const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data: myOrderData, refetch,isFetching } = useGetMyOrderQuery(undefined);

useEffect(() => {
  refetch();
}, [refetch]);

 console.log(myOrderData)

  const tableData: TTableData[] | undefined = myOrderData?.data?.flatMap((order) =>
    order.cars.map(({ _id, car, quantity,status }) => ({
      key: _id,
      email: order.email, // Make sure order has email
      brand: car?.brand || "N/A", // Prevent errors if car is undefined
      model: car?.model || "N/A",
      quantity,
      status,
      price: car?.price ? car.price * quantity : 0,
      orderDate: moment(new Date(order.createdAt)).format('MMMM'),
    }))
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
    // {
    //   title: 'Category',
    //   key: 'category',
    //   dataIndex: 'category',
    // },
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
        console.log()
        return (
          <div>
            <Button>{}</Button>
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