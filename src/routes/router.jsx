import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import ShowFurniture from "../pages/showFurniture/ShowFurniture";
import ShowProductDetails from "../pages/showProductDetails/ShowProductDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [

            {
                path: "/",
                element: <Home />
            },

            {
                path: "/furniture/:categoryName",
                element: <ShowFurniture />
            },
            {
                path: "/furniture/details/:id",
                element: <ShowProductDetails />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },

        ]
    },

]);


export default router;