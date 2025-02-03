import { Button, Space, Table, TableColumnsType, TableProps } from 'antd';
;

import { useAllUsersQuery, useBlockedUserMutation, useUnblockedUserMutation } from '../../../redux/features/admin/adminApi';
import { TUser } from '../../../types/admin.types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'sonner';




const AllUsers= () => {
  // const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
 const {data:allUsers,isFetching} = useAllUsersQuery(undefined)

  const tableData: TUser[] = allUsers?.data?.map(
    ({ _id, name, email,role, phone, address, city, status, createdAt, updatedAt }) => ({
      _id,
      key: _id, 
      name,
      email,
      role,
      phone,
      address,
      city,
      status,
      createdAt: moment(createdAt).format("DD-MM-YYYY"),
      updatedAt: moment(updatedAt).format("DD-MM-YYYY"),
    })
  ) || [];

  

  const [blockedUser, { isLoading }] = useBlockedUserMutation(); 
  const [unblockedUser] = useUnblockedUserMutation(); 

  const handleBlockedUser = async (id: string) => {
    try {
      const res = await blockedUser(id);
      
      if ('error' in res) {
        toast.error(res.error.data?.message || 'Blocking failed');
      } else {
        toast.success(res.data?.message || 'User blocked successfully');
      
      }
    } catch {
      toast.error('Something went wrong');
    }
  };
  const handleUnBlockedUser = async (id: string) => {
    try {
      const res = await unblockedUser(id);
      
      if ('error' in res) {
        toast.error(res.error.data?.message || 'Blocking failed');
      } else {
        toast.success(res.data?.message || 'User blocked successfully');
        
       
      }
    } catch {
      toast.error('Something went wrong');
    }
  };

const columns: TableColumnsType<TUser> = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
  },
  {
    title:'Role',
    key:'role',
    dataIndex:'role'
  },
  {
    title: 'Phone',
    key: 'phone',
    dataIndex: 'phone',
  },
  {
    title: 'Address',
    key: 'address',
    dataIndex: 'address',
  },
  {
    title: 'City',
    key: 'city',
    dataIndex: 'city',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
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

  {
    title: 'Action',
    key: 'x',
    render: (item) => 
      
     {
      console.log(item)
       return (
        <Space>
        <Link to={`/user/${item.key}`}>
        <Button>Details</Button>
        </Link>
        {
          item.status==='in-progress' ? <Button onClick={() => handleBlockedUser(item._id)} >
          Block
    </Button>: <Button onClick={() => handleUnBlockedUser(item._id)} >
          Unblock
    </Button>
        }
      </Space>
    )
     }
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
 

  
  
];



  const onChange: TableProps<TUser>['onChange'] = (
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
    <h1 className='text-center text-2xl font-bold mt-2 mb-2'>All Users</h1>
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

export default AllUsers;