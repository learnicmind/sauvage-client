import { useForm } from 'react-hook-form';
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Home/SectionTitle/SectionTitle";
import add1 from "../../../assets/add1.png"
import add2 from "../../../assets/add2.png"
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN

const AddItem = () => {

    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                    .then(data => {
                        console.log('after posting new menu item', data.data);
                        if(data.data.insertedId){
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Item successfully added to the menu!',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                    })
                }
            })

    };

    return (
        <div className="w-11/12 mx-auto py-10">
            <Helmet>
                <title>Sauvage | Add Item</title>
            </Helmet>

            <SectionTitle
                subheading={"What's New?"}
                heading={"Add an Item"}
                img1={add2}
                img2={add1}
            ></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-slate-300 text-lg">Recipe Name<span className="text-red-600">*</span></span>
                    </label>
                    <input type="text" name='name' placeholder="Recipe Name" {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full  bg-stone-700 text-slate-300" />
                </div>

                <div className='flex gap-4 my-2'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-slate-300 text-lg">Category<span className="text-red-600">*</span></span>
                        </label>
                        <select defaultValue="Pick Onw" className="select select-bordered bg-stone-700 text-slate-300" {...register("category", { required: true })}>
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Soup</option>
                            <option>Dessert</option>
                            <option>Desi</option>
                            <option>Offered</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-slate-300 text-lg">Price<span className="text-red-600">*</span></span>
                        </label>
                        <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full  bg-stone-700 text-slate-300" />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-slate-300 text-lg">Recipe Details</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24 bg-stone-700 text-slate-300" placeholder="Details"></textarea>
                </div>

                <div className="form-control w-64">
                    <label className="label">
                        <span className="label-text text-slate-300 text-lg">Item Image<span className="text-red-600">*</span></span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full  bg-yellow-600" />
                </div>

                <div className="form-control mt-6">

                    <input value="Add Item" type="submit" className="btn bg-yellow-600 hover:bg-yellow-700 font-bold text-slate-300 w-28" />
                </div>
            </form>

        </div>
    );
};

export default AddItem;