import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import AllCars from "../pages/AllCars/AllCars";
import CarDetails from "../pages/CarDetails/CarDetails";

 const router = createBrowserRouter([
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
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:'/login',
        element:<Login/>
    }
])

export default router