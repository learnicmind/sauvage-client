import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const { user } = useAuth();

    return (
        <div className="">
            <h2 className="text-semibold text-yellow-500 text-center text-2xl"> {user.displayName}</h2>
        </div>
    );
};

export default UserHome;