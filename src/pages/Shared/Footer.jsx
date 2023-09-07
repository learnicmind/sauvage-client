import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-stone-800 text-slate-300">
                <div>
                    <img className="h-16 w-16" src={logo} alt="" />
                    <div>
                        <a className="text-yellow-600 text-3xl font-bold"><span className="text-yellow-500 text-4xl">S</span>au<span className="text-yellow-500 text-4xl">V</span>age</a>
                    </div>
                </div>
                <div>
                    <span className="footer-title text-yellow-400">Company</span>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Our Menu</a>
                    <a className="link link-hover">Order Food</a>
                </div>
                <div>
                    <span className="footer-title text-yellow-400">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title text-yellow-400">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="Type Your Email" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-warning absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>


            </footer>
            <footer className="footer footer-center p-4 bg-stone-900 text-slate-300">
                <div>
                    <p>Copyright © 2023 - All right reserved by SauVage</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;