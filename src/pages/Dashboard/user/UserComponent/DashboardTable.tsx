import { Button, Table, TableColumnsType, TableProps } from 'antd';
import { TQueryParam } from '../../../../types/global';
import { useGetMyOrderQuery } from '../../../../redux/features/user/userApi';
import { TOrderData, TTableData } from '../../../../types/users.types';
import { useState } from 'react';


// export type TTableData = Pick<
//   TAcademicSemester,
//   'name' | 'year' | 'startMonth' | 'endMonth'
// >;



const DashboardTable= () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data: myOrderData, isFetching } = useGetMyOrderQuery(params);


  console.log(myOrderData)

 // Ensure `myOrderData?.data` has the correct type
const rawData = myOrderData?.data as TOrderData[] | undefined;

// Map the raw data to the table data
const tableData: TTableData[] =
  rawData?.map((item) => ({
    key: item._id, // Use the unique _id as the key
    brand: item.car.brand, // Extract brand from car
    model: item.car.model, // Extract model from car
    year: item.car.year, // Extract year from car
    price: item.car.price, // Extract price from car
    category: item.car.category, // Extract category from car
    quantity: item.quantity.toString(), // Convert quantity to string
    orderDate: new Date(item.createdAt).toLocaleDateString(), // Format the date
  })) || []; // Default to an empty array if rawData is undefined
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Brand',
      key: 'brand',
      dataIndex: 'brand',
      filters: [
        {
          text: 'Tata',
          value: 'Tata',
        },
        {
          text: 'BMW',
          value: 'BMW',
        },
        {
          text: 'Audi',
          value: 'Audi',
        },
        {
          text: 'Toyota',
          value: 'Toyota',
        },
      ],
    },
    {
      title: 'Model',
      key: 'model',
      dataIndex: 'model',
      filters: [
        {
          text: '3 Series',
          value: '3 Series',
        },
        {
          text: 'Croy',
          value: 'Croy',
        },
       
      ],
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
      title: 'Quantity',
      key: 'quantity',
      dataIndex: 'quantity',
     
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

    if(extra.action=== 'filter'){
      const queryParams :TQueryParam[] = []
      filters.brand?.forEach((item) => 
        queryParams.push({name:'brand', value:item}
      ));

      filters.model?.forEach((item) =>
            queryParams.push({ name: 'model', value: item })
          );
        
          
      setParams(queryParams)
     
    }
    
   
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