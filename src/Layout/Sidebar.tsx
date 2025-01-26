// import { Layout, Menu } from 'antd';
// import { verifyToken } from '../utils/verifyToken';
// import { useAppSelector } from '../redux/hook';
// import { TUser, useCurrentToken } from '../redux/features/auth/authSlice';
// import { sidebarItemsGenerator } from '../utils/sidebarItemsGenerator';
// import { adminPaths } from '../routes/admin.routes';
// import { userPaths } from '../routes/user.routes';

// const { Sider } = Layout;

// // const userRole = {
// //   ADMIN: 'admin',
// //   USER:'user'
// // };

// const Sidebar = () => {
// //   const token = useAppSelector(useCurrentToken)
      
// //       let user
  
// //       if(token){
// //         user = verifyToken(token)
// //       }
  
// //   let sidebarItems;

// //   switch ((user as TUser)!.role) {
// //     case userRole.ADMIN:
// //       sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
// //       break;
    
// //     case userRole.USER:
// //       sidebarItems = sidebarItemsGenerator(userPaths, userRole.USER);
// //       break;

// //     default:
// //       break;
// //   }

//   return (
//   <div>
    
//     <div className='grid grid-cols-5'>
//         <div className='border-1 border-gray-200 shadow-lg rounded-md'>
//         <p>Dashboard</p>
//             <p>My Profile</p>
//             <p>My Orders</p>
//             <p>My Favorite</p>
//         </div>
//     </div>
//   </div>
//   );
// };

// export default Sidebar;