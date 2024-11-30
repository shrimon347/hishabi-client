import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../components/shared/Error";
import Home from "../pages/homepage/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement : <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ]
    }
])
export default router