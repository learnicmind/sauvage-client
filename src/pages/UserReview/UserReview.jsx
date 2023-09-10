import { Helmet } from "react-helmet-async";
import SectionTitle from "../Home/SectionTitle/SectionTitle";
import img1 from "../../assets/review1.png"
import img2 from "../../assets/review2.webp"
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


const UserReview = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>Sauvage | Review</title>
            </Helmet>
            <SectionTitle
                img1={img1}
                subheading={"Sharign is Caring"}
                img2={img2}
                heading={"Give a Review"}
            ></SectionTitle>
            <div className="bg-stone-800 mx-auto">
                <div className="grid justify-center items-center pt-10">
                    <h3 className="text-2xl font-semibold text-slate-300 mb-4">Rate us!</h3>
                    <div className="flex text-yellow-500 space-x-1 text-lg">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div>

                <form className="card-body w-full md:w-3/4 mx-auto rounded">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-yellow-500 text-lg font-ubuntu">Which recipe you liked most?</span>
                        </label>
                        <input type="text" name="user_name" placeholder="Recipe you liked most" className="input bg-stone-800 border-2 border-stone-700 text-white" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-yellow-500 text-lg font-ubuntu">Do you have any suggestion for us?</span>
                        </label>
                        <input type="email" name="user_email" placeholder="Sugggestion" className="input bg-stone-800 border-2 border-stone-700 text-white" />
                    </div>
                    <label className="label">
                        <span className="label-text text-lg text-yellow-500 font-ubuntu">Kindly express your care in a short way.</span>
                    </label>
                    <textarea name="message" placeholder='Review in detail' className="textarea textarea-accent bg-stone-800 border-2 border-stone-700 text-white" ></textarea>
                    <input className='btn border-0 border-stone-700 border-r-4 border-b-4 hover:bg-stone-800 hover:border-stone-950 text-yellow-500 hover:text-yellow-600 bg-stone-950 mt-4' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default UserReview;