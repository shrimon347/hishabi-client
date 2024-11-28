import DashbordLayout from "@/layout/DashbordLayout";
import Login from "@/pages/authpage/Login";
import SignUp from "@/pages/authpage/SignUp";
import Dashboard from "@/pages/dashboard/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import Error from "../components/shared/Error";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/homepage/Home";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashbordLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
export default router;
