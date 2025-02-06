import { 
  UserOutlined, 
  DesktopOutlined, 

  ShoppingOutlined, 
  UnlockOutlined 
} from "@ant-design/icons";

import MyProfile from "../pages/Dashboard/user/MyProfile";
import UserDashboard from "../pages/Dashboard/user/UserDashboard";
import ChangePassword from "../pages/Dashboard/changePassword/ChangePassword";
import DashboardTable from "../pages/Dashboard/user/UserComponent/DashboardTable";

export const userPaths = [
{
  name: 'Dashboard',
  path: 'dashboard',
  icon: <DesktopOutlined />,
  element: <UserDashboard />,
},
{
  name: 'Update Profile',
  path: 'account-profile',
  icon: <UserOutlined />,
  element: <MyProfile />
},
{
  name: 'My Orders',
  path: 'my-orders',
  icon: <ShoppingOutlined />,
  element: <DashboardTable />
},
{
  name: 'Change Password',
  path: 'change-password',
  icon: <UnlockOutlined />,
  element: <ChangePassword />
},
];
