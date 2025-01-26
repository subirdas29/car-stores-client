import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import AllCars from "../pages/AllCars/AllCars";
import CarDetails from "../pages/CarDetails/CarDetails";
import AboutUs from "../pages/AboutUs/AboutUs";
import Main from "../Layout/Main";
import Dashboard from "../Layout/DashboardLayout";
import DashboardLayout from "../Layout/DashboardLayout";

 const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<App/>
            },
            {
                path:'/allcars',
                element:<AllCars/>
        
            },
            {
                path:'/cardetails',
                element:<CarDetails/>
        
            },
          
            {
                path:'/about',
                element:<AboutUs/>
        
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            // {
            //     path:'/user',
            //     element:<DashboardLayout></DashboardLayout>,
            //     children:[
            //         {
            //             path:'dashboard',
            //             element:
            //         }
            //     ]
            // }
        ]
    }
])

export default router