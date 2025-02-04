import {  Menu } from 'antd';

import { userPaths } from '../routes/user.routes';
import { sidebarItemsGenerator } from '../utils/sidebarItemsGenerator';
import { adminPaths } from '../routes/admin.routes';
import { useAppSelector } from '../redux/hook';
import { TUser, useCurrentToken } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';




const userRole = {
  ADMIN: 'admin',
  USER:'user'
};

const Sidebar = () => {
  const token = useAppSelector(useCurrentToken)
      
      let user
  
      if(token){
        user = verifyToken(token)
      }
  
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
    
    <div className='border-1 border-gray-200 shadow-lg rounded-md  text-center md:text-left py-6 px-1'>
   
            <Menu  
            items= {sidebarItems}>
            </Menu>
        </div>
  </div>
  );
};

export default Sidebar;