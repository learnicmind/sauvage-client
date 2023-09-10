import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaCartPlus } from 'react-icons/fa';
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();


    const handleLogOUt = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }



    const navItems = <>
        <li className="md:hover:text-slate-400">
            <NavLink className={({ isActive }) =>
                isActive ? 'border-b-2 border-yellow-500' : ''
            } to='/'>Home</NavLink>
        </li>
        <li className="md:hover:text-slate-400">
            <NavLink className={({ isActive }) =>
                isActive ? 'border-b-2 border-yellow-500' : ''
            } to='/menu'>Our Menu</NavLink>
        </li>
        <li className="md:hover:text-slate-400">
            <NavLink className={({ isActive }) =>
                isActive ? 'border-b-2 border-yellow-500' : ''
            } to='/order'>Order Food</NavLink>
        </li>
        <li className="md:hover:text-slate-400">
            <NavLink className={({ isActive }) =>
                isActive ? 'border-b-2 border-yellow-500' : ''
            } to='/contact'>Contact Us</NavLink>
        </li>
        {
            isAdmin ? <li className="md:hover:text-slate-400">
                <NavLink className={({ isActive }) =>
                    isActive ? 'border-b-2 border-yellow-500' : ''
                } to="/dashboard/adminhome">Dashboard</NavLink>
            </li>
                :
                <li className="md:hover:text-slate-400">
                    <NavLink className={({ isActive }) =>
                        isActive ? 'border-b-2 border-yellow-500' : ''
                    } to="/dashboard/userhome">Dashboard</NavLink>
                </li>
        }
        <li className="md:hover:text-yellow-800 text-yellow-700 bg-slate-200 p-1 rounded-lg cursor-pointer">
            <NavLink className={({ isActive }) =>
                isActive ? 'border-b-2 border-yellow-500' : ''
            } to="/dashboard/mycart">
                <div className="flex items-center gap-2">
                    <FaCartPlus />
                    <p className="bg-slate-300 rounded-lg">+{cart.length || 0}</p>
                </div>
            </NavLink>
        </li>
        {
            user ? <>
                <span className="text-yellow-500">{user?.displayName}</span>
                <li className="md:hover:text-slate-400 text-yellow-500 ">
                    <button onClick={handleLogOUt}>Log Out</button>
                </li>
            </> : <>
                <li className="md:hover:text-slate-400 text-yellow-500">
                    <NavLink className={({ isActive }) =>
                        isActive ? 'border-b-2 border-yellow-500' : ''
                    } to='/login'>Login</NavLink>
                </li>
            </>
        }
    </>



    return (
        <div className="navbar font-ubuntu fixed z-10  bg-stone-800 bg-opacity-60 text-white flex ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52 text-xl text-black">
                        {navItems}
                    </ul>
                </div>
                <div className="flex gap-2">
                    <div>
                        <img className="h-10 w-10" src={logo} alt="" />
                    </div>
                    <div>
                        <a className="text-yellow-600 text-3xl font-bold"><span className="text-yellow-500 text-4xl">S</span>au<span className="text-yellow-500 text-4xl">V</span>age</a>
                    </div>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="text-slate-300 menu-horizontal space-x-6 text-xl font-ubuntu">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end ">
                <Link to="/login" className="btn px-4 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded hover:from-yellow-700 hover:to-yellow-600 cursor-pointer text-slate-200 font-ubuntu">Get Started</Link>
            </div>
        </div>
    );
};

export default Navbar;