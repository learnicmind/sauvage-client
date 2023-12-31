import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../components/Secret";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserReview from "../pages/UserReview/UserReview";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "menu",
          element: <Menu></Menu>
        },
        {
          path: "order",
          element: <Order></Order>
        },
        {
          path: "contact",
          element: <ContactUs></ContactUs>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "signup",
          element: <SignUp></SignUp>
        },
        {
          path: "secret",
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ],
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "userhome",
          element: <UserHome></UserHome>
        },
        {
          path: 'review',
          element: <UserReview></UserReview>
        },
        {
          path: "mycart",
          element: <MyCart></MyCart>
        },
        {
          path: "payment",
          element: <Payment></Payment>
        },
        // Admin Route
        {
          path: "adminhome",
          element: <PrivateRoute><AdminHome></AdminHome></PrivateRoute>
        },
        {
          path: "allusers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: "additem",
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: "manageitems",
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        }
      ]
    }
  ]);