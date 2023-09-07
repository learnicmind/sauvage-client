import { Helmet } from "react-helmet-async";
import loginImg from ".././../assets/login1.avif"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect,  useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'


    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleLogin = (event) => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Logged in Successfully',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                  navigate(from, {replace: true})
            })
    }

    const handleCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }


    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>Sauvage | Login</title>
            </Helmet>



            <div style={{ backgroundImage: `url(${loginImg})` }} className="hero min-h-screen  bg-no-repeat bg-center bg-cover">

                <div className="hero-content md:w-1/3">
                    <div className="card w-full shadow-2xl bg-stone-900 bg-opacity-80 ">
                        <h2 className="absolute top-4 right-36 text-4xl text-yellow-500 font-ubuntu font-semibold">Login</h2>
                        <form onSubmit={handleLogin} className="p-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-slate-200 text-lg font-ubuntu">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered text-slate-300 bg-stone-700" />
                            </div>

                            <div className="form-control">
                                <label className="label text-slate-300">
                                    <span className="label-text text-slate-200 text-lg font-ubuntu">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered text-slate-300 bg-stone-700" />
                            </div>

                            <div className="form-control">
                                <label className="label text-slate-300">
                                    <LoadCanvasTemplate />
                                </label>
                                <input  onBlur={handleCaptcha} name="captcha"  type="text" placeholder="Type Captcha" className="input input-bordered text-slate-300 bg-stone-700" />
                            </div>

                            <div className="form-control mt-6">
                                <input value="Sign In" disabled={false} type="submit" className="btn bg-yellow-600 hover:bg-yellow-700 text-lg text-slate-300" />
                            </div>

                            <p className=" mt-2 text-slate-300">New in SauVage? <Link to="/signup"><span className="text-blue-600 hover:underline">Sign Up</span></Link></p>
                            <SocialLogin />
                        </form>
                    </div>
                </div>
                <Link to="/">
                    <button className=" absolute top-0 left-[60px] btn px-4 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded hover:from-yellow-700 hover:to-yellow-600 cursor-pointer text-slate-200 font-ubuntu">Go Back</button>
                </Link>
            </div>

        </div>
    );
};

export default Login;