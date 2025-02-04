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

import AddCart from "../pages/AddCart/AddCart";
import VerifyOrder from "../pages/VerifyOrder/VerifyOrder";
import UserDetails from "../pages/Dashboard/admin/UserDetails";
import ProtectedRoute from "../Layout/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/all-cars",
        element: <AllCars />,
      },
      {
        path: "user/:userId",
        element: <UserDetails />,
      },
      {
        path: "car-details/:carId",
        element: <CarDetails />,
      },
      {
        path: "/cart",
        element: <AddCart />,
      },
      {
        path: "orders/verify",
        element: <VerifyOrder />,
      },

      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin",
        element: (
            <ProtectedRoute role="admin">
            <DashboardLayout />,
        </ProtectedRoute>
        ),
        children: routesGenerator(adminPaths),
      },
      {
        path: "/user",
        element: (
            <ProtectedRoute role="user">
            <DashboardLayout />,
        </ProtectedRoute>
        ),
        children: routesGenerator(userPaths),
      },
    ],
  },
]);

export default router;
