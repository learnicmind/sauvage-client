import { FaCartPlus, FaStar, FaWallet } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const { user } = useAuth();
    console.log("ami ekhane", user);

    return (
        <div className="bg-stone-800 p-8 rounded h-screen md:h-[320px]">
            <h2 className="text-semibold text-yellow-500 text-center text-2xl mb-4 font-ubuntu"><span className="text-slate-300">Welcome,</span> {user.displayName}!</h2>
            <div className="flex gap-4">
                <img className="w-[200px] h-[200px] rounded" src={user?.photoURL} alt="User Image" />
                <div className="space-y-2 mt-8">
                    <h2 className="font-ubuntu text-xl font-semibold text-slate-300">Your Activities</h2>
                    <p className="text-yellow-500 flex justify-center items-center gap-2 text-lg"><FaCartPlus /> Orders: <span className="text-slate-300">00</span></p>
                    <p className="text-yellow-500 flex justify-center items-center gap-2 text-lg"><FaStar /> Reviews: <span className="text-slate-300"></span></p>
                    <p className="text-yellow-500 flex justify-center items-center gap-2 text-lg"><FaWallet /> Payments: <span className="text-slate-300">$</span></p>
                </div>
            </div>
        </div>
    );
};

export default UserHome;