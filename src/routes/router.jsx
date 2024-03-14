import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import ShowFurniture from "../pages/showFurniture/ShowFurniture";

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

        ]
    },

]);


export default router;