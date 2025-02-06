


import {  Menu } from 'antd';

import { userPaths } from '../routes/user.routes';
import { sidebarItemsGenerator } from '../utils/sidebarItemsGenerator';
import { adminPaths } from '../routes/admin.routes';
import { useAppSelector } from '../redux/hook';
import { TUser, useCurrentToken } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useGetMeQuery } from '../redux/features/user/userApi';
import ProfileAvatar from '../components/ProfileAvatar/ProfileAvatar';




const userRole = {
  ADMIN: 'admin',
  USER:'user'
};

const Sidebar = () => {
  const token = useAppSelector(useCurrentToken)
  const { data } = useGetMeQuery(undefined,
    {
      refetchOnMountOrArgChange:true,
      refetchOnReconnect:true
    }
  );


  const imageUrl: string = data?.data?.imageUrl || "";

  const name: string = data?.data?.name || "";
      let user
  
      if(token){
        user = verifyToken(token)
      }
  
      const email = user?.email

  let sidebarItems 

  switch ((user as TUser)!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    
    case userRole.USER:
      sidebarItems = sidebarItemsGenerator(userPaths, userRole.USER);
      break;

    default:
      break;
  }

  return (
  <div>
    
    <div className="border-1 border-gray-200 shadow-lg rounded-md md:w-full text-center lg:text-left py-6 px-1">
      <div className="text-center mb-8 mt-4">
          <ProfileAvatar imageUrl={imageUrl} />
         <p className="text-lg">{name}</p>
         <p className="text-sm text-[#7e7e84]">{email}</p>
        </div>
        <Menu items={sidebarItems} />
      </div>
  </div>
  );
};

export default Sidebar;