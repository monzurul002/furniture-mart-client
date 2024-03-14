import logo from "../../assets//logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/showrooms">Showrooms</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li></>
    return (
        <nav className=" ">
            <div className="  flex  lg:justify-between justify-end items-center overflow-hidden bg-base-100">
                <div className=" ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[30] p-2 shadow bg-red-800 rounded-box w-52">
                            {navItems}
                        </ul>
                        <Link className="lg:flex hidden" to="/"><img src={logo} className="w-1/2 lg:w-1/3" alt="" /></Link>
                    </div>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navItems
                        }


                    </ul>
                </div>
                <div className="flex">
                    <div className="">
                        {/* <Link className="lg:hidden flex" to="/"><img src={logo} className="w-1/3" alt="" /></Link> */}
                        <input type="text" placeholder="What are you looking for" className="input input-bordered hidden lg:flex " /></div>
                    <button className="mx-3 lg:flex hidden"><Link className="btn flex">Login</Link></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;