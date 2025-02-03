import { Button, Space, Table, TableColumnsType, TableProps } from 'antd';
;

import { useAllCarsQuery, useDeleteCarMutation,  } from '../../../redux/features/admin/adminApi';
import { TCar } from '../../../types/admin.types';
import moment from 'moment';
import { Link } from 'react-router-dom';

import UpdateCarModal from './Modal/UpdateCarModal';
import { useMemo } from 'react';
import { toast } from 'sonner';




const ViewCars= () => {
  // const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data: allCars,isFetching} = useAllCarsQuery(undefined);

const [deleteCar] = useDeleteCarMutation()

const handleDeleteCar = async(id:string)=>{
  try {
    const res = await deleteCar(id);
    console.log(res)
    if ('error' in res) {
      toast.error(res.error.data.message || 'Delete failed');
    } else {
      toast.success(res.data.message || 'Order deleted successfully');
     
    }
  } catch {
    toast.error('Something went wrong');
  }
}

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
      createdAt: createdAt ? moment(createdAt).format("DD-MM-YYYY") : "N/A",
      updatedAt: updatedAt ? moment(updatedAt).format("DD-MM-YYYY") : "N/A",
    }))
  : [];

  

const columns: TableColumnsType<TCar> = [
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
    <h1 className='text-center text-2xl font-bold mt-2 mb-2'>All Cars</h1>
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



export default ViewCars;