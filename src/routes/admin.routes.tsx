import { PieChartOutlined } from "@ant-design/icons";
import AdminDashboard from "../pages/Dashboard/admin/AdminDashboard";
import ManageCars from "../pages/Dashboard/admin/ManageCars";
import ViewOrders from "../pages/Dashboard/admin/ViewOrders";
import ChangePassword from "../pages/Dashboard/changePassword/ChangePassword";
import AllUsers from "../pages/Dashboard/admin/AllUsers";


export const adminPaths =[
    {
        name:'Dashboard',
        path:'dashboard',
        icon:<PieChartOutlined />,
        element:<AdminDashboard/>
    },
    {
        name:'Manage Cars',
        path:'manage-cars',
        icon:<PieChartOutlined />,
        element:<ManageCars/>
    },
    {
        name:'All Users',
        path:'all-users',
        icon:<PieChartOutlined />,
        element:<AllUsers/>
    },
    {
        name:'View Orders',
        path:'view-orders',
        icon:<PieChartOutlined />,
        element:<ViewOrders/>
    },
    {
        name:'Change Password',
        path:'change-password',
        icon:<PieChartOutlined/>,
        element:<ChangePassword/>
    }
  
 ]