import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from 'antd';
;

import { useAllUsersQuery, useBlockedUserMutation, useUnblockedUserMutation } from '../../../redux/features/admin/adminApi';
import { TUser } from '../../../types/admin.types';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { toast } from 'sonner';
import { useState } from 'react';
// import { TQueryParam } from '../../../types/global';




const AllUsers= () => {
// const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
 const {data:allUsers,isFetching,refetch} = useAllUsersQuery( [
  { name: 'page', value: page },
  { name: 'sort', value: '-createdAt' },
  // ...params,
],
  {
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true
  }
 )

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

  

  const [blockedUser] = useBlockedUserMutation(); 
  const [unblockedUser] = useUnblockedUserMutation(); 

  const handleBlockedUser = async (id: string) => {
    try {
      const res = await blockedUser(id);
      
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
      }  else {
        toast.success(res.data?.message || 'User blocked successfully');
        await refetch()
      }
    } catch {
      toast.error('Something went wrong');
    }
  };
  const handleUnBlockedUser = async (id: string) => {
    try {
      const res = await unblockedUser(id);
      
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
      }  else {
        toast.success(res.data?.message || 'User blocked successfully');
        await refetch()
       
      }
    } catch {
      toast.error('Something went wrong');
    }
  };

const columns: TableColumnsType<TUser> = [
  {
    title: 'Name',
    key: 'name',
    fixed: 'left',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    key: 'email',
    fixed: 'left',
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
    fixed: 'right',
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
  
];



  const onChange: TableProps<TUser>['onChange'] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    console.log({filters,extra})

    
   
  };

  return (
  <div className='border-1 border-gray-200 shadow-lg rounded-md  text-center md:text-left py-6 px-1'>
    <h1 className='text-center text-2xl font-bold mt-2 mb-2'>All Users</h1>
      <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      pagination={false}
      onChange={onChange}
      scroll={{ x: 'max-content' }}
    />
    <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={allUsers?.meta?.limit}
        total={allUsers?.meta?.total}
      />
  </div>
  );
};

export default AllUsers;