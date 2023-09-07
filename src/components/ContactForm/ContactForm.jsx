import contactImg1 from "../../assets/message.webp"
import contactImg2 from "../../assets/contactus1.webp"
import SectionTitle from '../../pages/Home/SectionTitle/SectionTitle';

const ContactForm = ({ img1, subheading, img2, heading }) => {



    return (
        <div className="w-11/12 mx-auto pt-4">
            <SectionTitle 
            img1={contactImg1}
            subheading={"Send Us a Message"}
            img2={contactImg2}
            heading={"Contact Form"}
             />
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-yellow-500 text-lg font-ubuntu">Your Name</span>
                    </label>
                    <input type="text" name="user_name" placeholder="Your Name" className="input bg-stone-800 border-2 border-stone-700 text-white" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-yellow-500 text-lg font-ubuntu">Your Email</span>
                    </label>
                    <input type="email" name="user_email" placeholder="Your Email" className="input bg-stone-800 border-2 border-stone-700 text-white" />
                </div>
                <label className="label">
                    <span className="label-text font-bold text-yellow-500 text-lg font-ubuntu">Your Message</span>
                </label>
                <textarea name="message" placeholder='Write Your Message' className="textarea textarea-accent font-bold bg-stone-800 border-2 border-stone-700 text-white" ></textarea>
                <input className='btn border-0 border-stone-700 border-r-4 border-b-4 hover:bg-stone-800 hover:border-stone-950 text-yellow-500 hover:text-yellow-600 bg-stone-950 mt-4' type="submit" value="Send" />
            </form>

        </div>
    );
};

export default ContactForm;