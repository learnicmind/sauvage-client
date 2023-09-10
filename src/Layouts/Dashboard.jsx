import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaCartPlus, FaHamburger, FaHome, FaPhoneSquareAlt, FaUsers } from 'react-icons/fa';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { ImSpoonKnife } from 'react-icons/im';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {

    const [cart] = useCart();

    const [isAdmin] = useAdmin();



    return (
        <div>
            <Helmet>
                <title>Sauvage | User Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-stone-950 text-yellow-500 text-lg font-ubuntu ">
                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/adminhome"><FaHome /><span>Admin Home</span></NavLink></li>
                                <li><NavLink to="/dashboard/additem"><ImSpoonKnife /><span>Add an Item</span></NavLink></li>
                                <li><NavLink to="/dashboard/manageitems"><FaHamburger /><span>Manage Items</span></NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers /><span>All Users</span></NavLink></li>
                            </> :
                                <>
                                    <li><NavLink to="/dashboard/userhome"><FaHome /><span>User Home</span></NavLink></li>
                                    <li><NavLink to="/dashboard/review"><FaCalendarAlt /><span>Review</span></NavLink></li>
                                    <li className="grid grid-cols-2">
                                        <NavLink to="/dashboard/mycart"><FaCartPlus /><span>My Cart</span></NavLink>
                                        <div className="bg-slate-700 flex items-center justify-center rounded-lg text-xl">+{cart.length || 0}</div>
                                    </li>
                                </>
                        }


                        <div className="my-4">
                            <hr />
                        </div>

                        <li><NavLink to="/"><FaHome /><span>Home</span></NavLink></li>
                        <li><NavLink to="/menu"><FaHamburger /><span>Menu</span></NavLink></li>
                        <li><NavLink to="/order"><BsFillBagCheckFill /><span>Order</span></NavLink></li>
                        <li><NavLink to="/contact"><FaPhoneSquareAlt /><span>Contact</span></NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;