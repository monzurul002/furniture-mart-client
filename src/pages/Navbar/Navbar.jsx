import logo from "../../assets//logo.png"
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/showrooms">Showrooms</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li></>
    return (
        <nav className="w-full md:w-11/12">
            <div className="navbar bg-base-100">
                <div className="navbar-start w-full">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[350px] ">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/"><img src={logo} className="w-3/5 md:w-1/3 ml-12 md:ml-0 " alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">


                    {
                        !user ? <Link to="/login" className="">   <FaUserCircle className="text-2xl" /></Link> : <h2 className="font-bold text-amber-400">{user.displayName}</h2>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;