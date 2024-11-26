import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../components/shared/Error";
import Home from "../pages/homepage/Home";
import SignUp from "@/pages/authpage/SignUp";
import Login from "@/pages/authpage/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement : <Error />,
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
        ]
    }
])
export default router