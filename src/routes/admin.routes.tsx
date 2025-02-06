import { 
    DashboardOutlined, 
    CarOutlined, 
    UserOutlined, 
    ShoppingCartOutlined, 
    UnlockOutlined, 
    ProfileOutlined, 
    PlusSquareOutlined 
} from "@ant-design/icons";

import AdminDashboard from "../pages/Dashboard/admin/AdminDashboard";
import ViewOrders from "../pages/Dashboard/admin/ViewOrders";
import ChangePassword from "../pages/Dashboard/changePassword/ChangePassword";
import AllUsers from "../pages/Dashboard/admin/AllUsers";
import ViewCars from "../pages/Dashboard/admin/ViewCars";
import AddCars from "../pages/Dashboard/admin/AddCars";
import MyProfile from "../pages/Dashboard/user/MyProfile";

export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        icon: <DashboardOutlined />,
        element: <AdminDashboard />
    },
    {
        name: 'Add Cars',
        path: 'add-cars',
        icon: <PlusSquareOutlined />,
        element: <AddCars />
    },
    {
        name: 'All Cars',
        path: 'view-cars',
        icon: <CarOutlined />,
        element: <ViewCars />
    },
    {
        name: 'All Users',
        path: 'all-users',
        icon: <UserOutlined />,
        element: <AllUsers />
    },
    {
        name: 'All Orders',
        path: 'all-orders',
        icon: <ShoppingCartOutlined />,
        element: <ViewOrders />
    },
    {
        name: 'Update Profile',
        path: 'account-profile',
        icon: <ProfileOutlined />,
        element: <MyProfile />
    },
    {
        name: 'Change Password',
        path: 'change-password',
        icon: <UnlockOutlined />,
        element: <ChangePassword />
    }
];
