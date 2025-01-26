import MyProfile from "../pages/Dashboard/user/MyProfile";
import UserDashboard from "../pages/Dashboard/user/UserDashboard";

export const userPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <UserDashboard/>,
  },
  {
    path:'account-profile',
    element:<MyProfile/>
  }
  
];