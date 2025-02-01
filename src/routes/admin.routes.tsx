import { PieChartOutlined } from "@ant-design/icons";
import AdminDashboard from "../pages/Dashboard/admin/AdminDashboard";

import ViewOrders from "../pages/Dashboard/admin/ViewOrders";
import ChangePassword from "../pages/Dashboard/changePassword/ChangePassword";
import AllUsers from "../pages/Dashboard/admin/AllUsers";

import ViewCars from "../pages/Dashboard/admin/ViewCars";
import AddCars from "../pages/Dashboard/admin/AddCars";


export const adminPaths =[
    {
        name:'Dashboard',
        path:'dashboard',
        icon:<PieChartOutlined />,
        element:<AdminDashboard/>
    },
    {
        name:'Add Cars',
        path:'add-cars',
        icon:<PieChartOutlined />,
        element:<AddCars/>
    },
    {
        name:'All Cars',
        path:'view-cars',
        icon:<PieChartOutlined />,
        element:<ViewCars/>
    },
    {
        name:'All Users',
        path:'all-users',
        icon:<PieChartOutlined />,
        element:<AllUsers/>
    },
    {
        name:'All Orders',
        path:'all-orders',
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