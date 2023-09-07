import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {

    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [ , refetch] = useCart()



    const handleAddToCart = (item) => {
        console.log(item);

        if (user && user.email) {
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    refetch() 
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your Food Added to the Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login for order the food?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        navigate('/login', {state: {from: location}})
                    )
                }
            })
        }
    }



    return (
        <div>
            <div className="">
                <div className="h-full mt-8 relative rounded-lg">
                    <img className="md:h-80 w-full h-80  md:w-80" src={image} alt="" />
                    <div className=" space-y-2 bg-stone-950 md:w-80 p-2 ">
                        <h2 className="text-yellow-500 font-semibold text-xl">{name}</h2>
                        <p className="text-lg text-slate-300"><span className="font-bold">Ingredients:</span> {recipe}</p>
                        <p className="text-lg font-semibold text-yellow-500 absolute md:right-20 -right-0 -top-2 bg-stone-950 p-2">Price: $<span className="text-yellow-500">{price}</span></p>
                        <button onClick={() => handleAddToCart(item)} className="bg-yellow-700 px-3 py-2 hover:bg-yellow-800 text-lg text-slate-300 rounded-lg">Add to Cart</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FoodCard;