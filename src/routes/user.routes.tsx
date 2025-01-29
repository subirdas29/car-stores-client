import { ContainerOutlined, DesktopOutlined } from "@ant-design/icons";
import MyProfile from "../pages/Dashboard/user/MyProfile";
import UserDashboard from "../pages/Dashboard/user/UserDashboard";


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
];