
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
    <p className="text-lg font-semibold"><Skeleton/></p>
  </div>
) : (
 <>
  <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <div
    style={{
      backgroundImage: `url('assets/images/banner/car1.webp')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textAlign: "center",
      padding: "80px",
      position: "relative",
    }}
  >
    {/* Dark Blue Shadow Overlay */}
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0, 0, 90, 0.4)", // Dark blue overlay
        zIndex: "1",
      }}
    />
    {/* Content */}
    <div
      style={{
        position: "relative",
        zIndex: "2",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", fontWeight:"bold", color:"white" }}>
        User Details
      </h1>
   
    </div>
  </div>
</div>
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
 </>
);
  
}

export default UserDetails
