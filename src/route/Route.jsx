import Login from "@/pages/authpage/Login";
import SignUp from "@/pages/authpage/SignUp";
import { createBrowserRouter } from "react-router-dom";
import Error from "../components/shared/Error";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/homepage/Home";

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
    path: "/dashbord",
    element: null,
    children: [
      {
        path: "/dashbord",
        element: null,
      },
    ],
  },
]);
export default router;
