import { ContainerOutlined, DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import MyProfile from "../pages/Dashboard/user/MyProfile";
import UserDashboard from "../pages/Dashboard/user/UserDashboard";
import ChangePassword from "../pages/Dashboard/changePassword/ChangePassword";


export const userPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    icon: <DesktopOutlined />,
    element: <UserDashboard/>,
  },
  {
    name: 'Profile',
    path:'account-profile',
    icon: <ContainerOutlined />,
    element:<MyProfile/>
  },
  {
    name:'Change Password',
    path:'change-password',
    icon:<PieChartOutlined/>,
    element:<ChangePassword/>
}
];