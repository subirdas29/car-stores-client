import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import AllCars from "../pages/AllCars/AllCars";

import AboutUs from "../pages/AboutUs/AboutUs";
import Main from "../Layout/Main";
import DashboardLayout from "../Layout/DashboardLayout";

import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import CarDetails from "../pages/CarDetails/CarDetails";
import CarData from "../pages/CarDetails/CarData";


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
                path:'/all-cars',
                element:<AllCars/>
        
            },
            {
                path:'car-details/:carId',
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
            {
                path:'/admin',
                element:
       (
       
        <DashboardLayout/>
  
       ),
      children: routesGenerator(adminPaths)
    },
            {
                path:'/user',
                element:    (
                    <DashboardLayout/>
                   ),
                  children: routesGenerator(userPaths)
                },
          
        ]
    }
])

export default router