import { useContext } from "react";
import googleIcon from "../../assets/google.webp"
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    }
                    )


            })
    }

    return (
        <div>
            <div className="py-4">
                <hr />
            </div>
            <div className="flex items-center justify-center">
                <button onClick={handleGoogle}>
                    <img className="h-16 w-16 cursor-pointer" src={googleIcon} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;