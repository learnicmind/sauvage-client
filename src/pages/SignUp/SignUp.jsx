import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import signUpImg from "../../assets/signup.avif"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";



const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();


    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const savedUser = {name: data.name, email: data.email}
                        fetch('https://sauvage-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        title: 'User profile updated Successfully',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    })
                                    navigate('/')
                                }
                            })


                    })
                    .catch(error => {
                        console.log(error);
                    })
                reset();
                Swal.fire({
                    title: 'User Created Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })

            })

    };

    return (
        <div>
            <div className="w-11/12 mx-auto">
                <Helmet>
                    <title>Sauvage | Sign Up</title>
                </Helmet>

                <div style={{ backgroundImage: `url(${signUpImg})` }} className="hero min-h-screen  bg-no-repeat bg-center bg-cover">

                    <div className="hero-content md:w-1/3">
                        <div className="card w-full shadow-2xl bg-stone-900 bg-opacity-80 ">
                            <h2 className="absolute top-0 right-36 text-4xl text-yellow-500 font-ubuntu font-semibold ">Sign Up</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="p-8">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-200 text-lg font-ubuntu">Your Name</span>
                                    </label>
                                    <input {...register("name", { required: true })} name="name" type="text" placeholder="Your Name" className="input input-bordered text-slate-300 bg-stone-700" />
                                    {errors.name && <span className="text-warning">Name is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-200 text-lg font-ubuntu">Photo URL</span>
                                    </label>
                                    <input {...register("photo", { required: true })} name="photo" type="text" placeholder="Photo URL" className="input input-bordered text-slate-300 bg-stone-700" />
                                    {errors.photo && <span className="text-warning">Photo URL is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-200 text-lg font-ubuntu">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })} name="email" type="email" placeholder="email" className="input input-bordered text-slate-300 bg-stone-700" />
                                    {errors.email && <span className="text-warning">Email is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label text-slate-300">
                                        <span className="label-text text-slate-200 text-lg font-ubuntu">Password</span>
                                    </label>
                                    <input {...register("password",
                                        {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/
                                        })}
                                        name="password" type="password" placeholder="password" className="input input-bordered text-slate-300 bg-stone-700" />
                                    {errors.password?.type === 'required' && <p className="text-warning">Password is required</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-warning">Password must have one uppercase, one lowercase, one number, one special character</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-warning">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-warning">Password must be less than 20 characters</p>}
                                </div>

                                <div className="form-control mt-6">
                                    <input value="Sign Up" type="submit" className="btn bg-yellow-600 hover:bg-yellow-700 text-lg text-slate-300" />
                                </div>

                                <p className=" mt-2 text-slate-300">Already Have an Account? <Link to="/login"><span className="text-blue-600 hover:underline">Login</span></Link></p>
                            <SocialLogin />
                            </form>
                        </div>
                    </div>
                    <Link to="/">
                        <button className=" absolute top-0 left-[60px] btn px-4 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded hover:from-yellow-700 hover:to-yellow-600 cursor-pointer text-slate-200 font-ubuntu">Go Back</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default SignUp;