import { NavLink } from "react-router-dom";
import { FaHome, FaArrowAltCircleRight } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut();
    }
    function toggleTheme() {
        document.documentElement.classList.toggle("dark")
    }

    return (
        <div className="w-full">
            <div className="navbar  bg-[#e0b75a] lg:p-4 h-5 dark:bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-black text-xl">
                            <NavLink to="/" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-black" : ""
                            }><li><a>Home</a></li></NavLink>
                            <NavLink to="/AddProduct" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-black" : ""
                            }><li><a>Add Product</a></li></NavLink>
                            <NavLink to="/MyCart" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-black" : ""
                            }><li><a>My Cart</a></li></NavLink>
                            <NavLink to="/login" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-black" : ""
                            }><li><a>Login</a></li></NavLink>
                        </ul>
                    </div>
                    <div className="flex items-center ">
                        <img className="w-[100px] h-[100px] ml-10" src="https://i.ibb.co/frkHZW2/Kitchen-1-removebg-preview.png" alt="" />
                        <h3 className="text-2xl font-bold -mx-5">Open Kitchen</h3>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-bold text-white">
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a><FaHome></FaHome>Home</a></li></NavLink>
                        <NavLink to="/AddProduct" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a>Add Product</a></li></NavLink>
                        <NavLink to="/MyCart" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a>My Cart</a></li></NavLink>
                        <NavLink to="/login" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-black" : ""
                        }><li><a>
                            <FaArrowAltCircleRight></FaArrowAltCircleRight> Login</a></li></NavLink>
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex items-center text-center">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                {user.email}
                                            </a>
                                        </li>

                                        <li onClick={handleLogOut} ><a>Logout</a></li>
                                    </ul>
                                </div>
                                <button onClick={handleLogOut}
                                    className="btn btn-active bg-[#d52a00]"

                                    type="button"
                                    data-ripple-light="true"
                                >
                                    <span>Logout</span>
                                </button>
                            </div>
                            :
                            <NavLink to="/login">
                                <button
                                    className="btn btn-warning"
                                    type="button"
                                    data-ripple-light="true"
                                >
                                    <span>Login</span>
                                </button>
                            </NavLink>

                    }

                </div>
                <label className="swap swap-rotate">

                    <input onClick={toggleTheme} type="checkbox" />

                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
        </div>
    );
};

export default Navbar;