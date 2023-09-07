import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleDelete = user => {
        console.log(user);
    }

    const handleAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }



    return (
        <div>
            <Helmet>
                <title>Sauvage | All Users</title>
            </Helmet>

            <p className="text-2xl font-bold font-ubuntu text-yellow-500 py-4">Total Users: {users.length}</p>

            <div className="overflow-x-auto md:w-[900px] bg-stone-700 text-slate-300">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead className="bg-stone-950 text-lg text-slate-300">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-lg font-semibold bg-stone-700">
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th className="bg-stone-700">{index + 1}</th>
                                    <td className="bg-stone-700">{user.name}</td>
                                    <td className="bg-stone-700">{user.email}</td>
                                    <td className="bg-stone-700">
                                        {user.role === 'admin' ? 'admin' :
                                            <button onClick={() => handleAdmin(user)} className="btn btn-ghost btn-xs text-xl text-orange-500"><FaUserTie /></button>
                                        }
                                    </td>
                                    <td className="bg-stone-700">
                                        <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-xs text-xl text-red-600"><FaTrashAlt /></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
};

export default AllUsers;