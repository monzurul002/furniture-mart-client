import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import ShowFurniture from "../pages/showFurniture/ShowFurniture";
import ShowProductDetails from "../pages/showProductDetails/ShowProductDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllProducts from "../pages/allProducts/AllProducts";
import Showroom from "../pages/showroom/Showroom";
import NotFount from "../pages/notFound/NotFount";
import About from "../pages/About/About";
import Contact from "../pages/contact/Contact";

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
                path: "/allfurnitures",
                element: <AllProducts />
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
            {
                path: "/showrooms",
                element: <Showroom />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "*",
                element: <NotFount />
            },

        ]
    },

]);


export default router;