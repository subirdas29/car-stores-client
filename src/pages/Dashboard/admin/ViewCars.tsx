import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from 'antd';
;

import { useAllCarsQuery, useDeleteCarMutation,  } from '../../../redux/features/admin/adminApi';
import { TCar } from '../../../types/admin.types';
import moment from 'moment';
import { Link } from 'react-router-dom';

import UpdateCarModal from './Modal/UpdateCarModal';

import { toast } from 'sonner';
import { useState } from 'react';
import { TQueryParam } from '../../../types/global';




const ViewCars= () => {
  const [params, setParams] = useState<TQueryParam[]>([]);

  const [page, setPage] = useState(1);
  const { data: allCars,isFetching,refetch} = useAllCarsQuery( [
    { name: 'page', value: page },
    { name: 'sort', value: '-createdAt' },
    ...params,
  ],{
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true
  });

console.log(allCars)


const [deleteCar] = useDeleteCarMutation()

const handleDeleteCar = async (id: string) => {
  try {
    const res = await deleteCar(id);

   
    if ('error' in res && res.error) {
      const error = res.error;

     
      if ((error as { data: unknown }).data) {
        const message = (error as { data: { message?: string } }).data?.message || 'Delete failed';
        toast.error(message);
      }
    
      else if ((error as { message?: string }).message) {
        const message = (error as { message?: string }).message || 'Delete failed';
        toast.error(message);
      } else {
        toast.error('Delete failed');
      }
    } else {
     
      toast.success(res.data.message || 'Car deleted successfully');
       await refetch()
    }
  } catch (err) {
    
    console.error(err); 
    toast.error('Something went wrong');
  }
};

  console.log(allCars)

  const tableData = allCars?.data
  ? allCars.data.map(({ _id, brand, model, category, imageUrl, price, stock, description, createdAt, updatedAt }) => ({
      _id,
      key: _id, 
      brand,
      model,
      category,
      description,
      imageUrl,
      price,
      stock,
      // isDeleted,
      createdAt: createdAt ? moment(createdAt).format("DD-MM-YYYY") : "N/A",
      updatedAt: updatedAt ? moment(updatedAt).format("DD-MM-YYYY") : "N/A",
    }))
  : [];
  console.log(tableData)

  

const columns: TableColumnsType<TCar> = [
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
    title: 'Category',
    key: 'category',
    dataIndex: 'category',
  },
  {
    title: 'Price',
    key: 'price',
    dataIndex: 'price',
  },

  {
    title: 'Stock',
    key: 'stock',
    dataIndex: 'stock',
  },
  {
    title: 'CreatedAt',
    key: 'createdAt',
    dataIndex: 'createdAt',
  },
  {
    title: 'UpdatedAt',
    key: 'updatedAt',
    dataIndex: 'updatedAt',
  },
//   {
//     title: 'Status',
//     key: 'status',
//     dataIndex: 'status',
//     render: (status) => (
//       <span
//         className={`px-2 py-1 rounded-md ${
//           status === "Paid" ? "bg-green-500 text-white" : "bg-red-500 text-white"
//         }`}
//       >
//         {status}
//       </span>
//     ),
//   },
  {
    title: 'Action',
    key: 'x',
    fixed: 'right',
    render: (item) => 
      
     {
  
       return (
        <Space>
        <Link to={`/car-details/${item.key}`}>
        <Button>Details</Button>
        </Link>
        <UpdateCarModal carInfo={item}  />
        <Button onClick={()=>handleDeleteCar(item._id)}>Delete</Button>
      </Space>
    )
     }
  }, 
  
];

  const onChange: TableProps<TCar>['onChange'] = (
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
    <h1 className='text-center text-2xl font-bold mt-2 mb-2'>All Cars</h1>
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
        pageSize={allCars?.meta?.limit}
        total={allCars?.meta?.total}
      />
  </div>
  );
};



export default ViewCars;