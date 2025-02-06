
import { useParams } from 'react-router-dom';
import { useGetAUserQuery } from '../../../redux/features/admin/adminApi';
import moment from 'moment';
import { Skeleton } from 'antd';
import ProfileAvatar from '../../../components/ProfileAvatar/ProfileAvatar';

const UserDetails = () => {
    const { userId } = useParams();
    const {data:userData,isLoading}=useGetAUserQuery(userId,{
        refetchOnMountOrArgChange:true,
    refetchOnReconnect:true
    })

    console.log(userData)

    if (isLoading) return   <Skeleton className="my-28" active />;
   

  return isLoading?(
    <div className="flex justify-center items-center h-screen">
    <p className="text-lg font-semibold">Loading...</p>
  </div>
) : (
  <div className="mx-8 md:mx-12 lg:mx-24 p-6 my-28">
    <div className='flex justify-center'><ProfileAvatar imageUrl={userData?.data?.imageUrl} /></div>
    <h1 className="text-3xl font-bold mb-6 text-center">{userData?.data?.name} Details</h1>
    <div className='text-center'>
      
     
      {/* Customer Information */}
      <div className="border-1 border-gray-200 shadow-lg rounded-md p-6 mx-auto">
        
        <p><strong>Name:</strong> {userData?.data?.name}</p>
        <p><strong>Email:</strong> {userData?.data?.email}</p>
        <p><strong>Phone:</strong> {userData?.data?.phone}</p>
        <p><strong>Address:</strong> {userData?.data?.address}</p>
        <p><strong>City:</strong> {userData?.data?.city}</p>
        <p><strong>Role:</strong> {userData?.data?.role}</p>
        <p><strong>Status:</strong> {userData?.data?.status}</p>
        <p><strong>Account Created:</strong> {moment(userData?.data?.createdAt).format('DD-MM-YYYY')}
        </p>
        <p><strong>Account Updated:</strong> {moment(userData?.data?.updatedAt).format('DD-MM-YYYY')}</p>
      </div>
    </div>
   
  </div>
);
  
}

export default UserDetails
