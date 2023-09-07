import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCart = () => {

    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDeleteItem = (item) => {
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
              fetch(`https://sauvage-server.vercel.app/carts/${item._id}`, {
                method: "DELETE"
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your item has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }

    return (
        <div>
            <Helmet>
                <title>Sauvage | My Cart</title>
            </Helmet>
            <div className="flex items-center justify-between font-ubuntu font-semibold text-xl mb-2 px-10 pt-4 ">
                <h2 className="text-yellow-500">Total Items {cart.length}</h2>
                <h2 className="text-yellow-500">Price: ${total}</h2>
                <Link to="/dashboard/payment"><button className="btn btn-warning btn-sm">PAY</button></Link>
            </div>
            <div className="overflow-x-auto md:w-[900px] bg-stone-700 text-slate-300">
                <table className="table">
                    {/* head */}
                    <thead className="bg-stone-950 text-lg text-slate-300">
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Items Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg font-semibold">
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    ${item.price}
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-xs text-xl text-red-500"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;