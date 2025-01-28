import { Button, Table, TableColumnsType, TableProps } from "antd";

import { TQueryParam } from "../../../types/global";
import {  TTableData } from "../../../types/users.types";
import { useViewOrdersQuery } from "../../../redux/features/admin/adminApi";
import { useState } from "react";
import { TOrderView } from "../../../types/admin.types";
import moment from "moment";


const ViewOrders = () => {


   const { data: myOrderData, isFetching } = useViewOrdersQuery(undefined);
 
 
   console.log(myOrderData)
 
  // Ensure `myOrderData?.data` has the correct type
  const tableData = myOrderData?.data?.map(
    ({ _id,email,car,quantity,totalPrice,createdAt }) => ({
       key: _id,
       email,
       carName: `${car.brand} ${car.model} `,
      
       category: `${car.category} `,
       quantity,
       price: totalPrice,
       orderDate: moment(new Date(createdAt)).format('MMMM'),
       
     })
 );

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Car Name',
      key: 'carName',
      dataIndex: 'carName',
      // filters: [
      //   {
      //     text: 'Autumn',
      //     value: 'Autumn',
      //   },
      //   {
      //     text: 'Fall',
      //     value: 'Fall',
      //   },
      //   {
      //     text: 'Summer',
      //     value: 'Summer',
      //   },
      // ],
    },
    {
      title: 'OrderDate',
      key: 'orderDate',
      dataIndex: 'orderDate',
      // filters: [
      //   {
      //     text: '2024',
      //     value: '2024',
      //   },
      //   {
      //     text: '2025',
      //     value: '2025',
      //   },
      //   {
      //     text: '2026',
      //     value: '2026',
      //   },
      // ],
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
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <div>
            <Button>Delete</Button>
          </div>
        );
      },
    },
  ];

  // const onChange: TableProps<TTableData>['onChange'] = (
  //   _pagination,
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   console.log({filters,extra})

  //   if(extra.action=== 'filter'){
  //     const queryParams :TQueryParam[] = []
  //     filters.name?.forEach((item) => 
  //       queryParams.push({name:'name', value:item}
  //     ));

  //     filters.year?.forEach((item) =>
  //           queryParams.push({ name: 'year', value: item })
  //         );
  //         // console.log(queryParams)
     
  //     setParams(queryParams)
  //   }
    
   
  // };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      // onChange={onChange}
      scroll={{ x: 'max-content' }}
    />
  )
}

export default ViewOrders
