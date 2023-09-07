import SectionTitle from "../../Home/SectionTitle/SectionTitle";
import hurryImg from "../../../assets/hurryup.png"
import manage from "../../../assets/manage.png"
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ManageItems = () => {

    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();


    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>Sauvage | Manage Items</title>
            </Helmet>
            <SectionTitle
                subheading={"Hurry Up!"}
                heading={"Manage Items"}
                img1={hurryImg}
                img2={manage}
            ></SectionTitle>

            <div className="overflow-x-auto bg-stone-700 text-slate-300">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className="bg-stone-950 text-lg text-slate-300">

                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className="text-lg font-semibold bg-stone-700">
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.category}
                                    </td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs text-xl text-yellow-600 text-end"><FaEdit
                                        /></button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-xs text-xl text-red-600"><FaTrashAlt /></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageItems;