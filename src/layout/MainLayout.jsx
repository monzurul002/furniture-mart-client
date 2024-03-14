import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="w-[90%] mx-auto">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;