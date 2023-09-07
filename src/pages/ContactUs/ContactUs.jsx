import Cover from "../Shared/Cover/Cover";
import contactImg from "../../assets/contactus.jpg"
import SectionTitle from "../Home/SectionTitle/SectionTitle";
import contactLogo from "../../assets/location.png"
import visitLogo from "../../assets/visit.png"
import { MdLocationOn, MdOutlineWatch, MdPhone, } from "react-icons/md";
import ContactForm from "../../components/ContactForm/ContactForm";


const ContactUs = ({ image, title, img1, subheading, img2, heading }) => {
    return (
        <div>
            <Cover image={contactImg} title="Contact Us" />
            <SectionTitle
                img1={visitLogo}
                subheading={"Visit Us"}
                img2={contactLogo}
                heading={"Our Location"}
            />

            <div className="w-11/12 mx-auto mb-10 font-ubuntu">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="border-2 border-stone-950 rounded-lg">
                        <div className="bg-stone-950 p-4 flex items-center justify-center ">
                            <MdPhone className="text-4xl text-yellow-500" />
                        </div>
                        <div className="text-center bg-stone-800 m-4 p-4 rounded-lg">
                            <h2 className="text-yellow-500 text-lg font-bold">Phone</h2>
                            <p className="text-slate-300 text-lg">+103-334334-34</p>
                        </div>
                    </div>
                    <div className="border-2 border-stone-950 rounded-lg">
                        <div className="bg-stone-950 p-4 flex items-center justify-center ">
                            <MdLocationOn className="text-4xl text-yellow-500" />
                        </div>
                        <div className="text-center bg-stone-800 m-4 p-4 rounded-lg">
                            <h2 className="text-yellow-500 text-lg font-bold">Address</h2>
                            <p className="text-slate-300 text-lg">190 Hill Street, England</p>
                        </div>
                    </div>
                    <div className="border-2 border-stone-950 rounded-lg">
                        <div className="bg-stone-950 p-4 flex items-center justify-center ">
                            <MdOutlineWatch className="text-4xl text-yellow-500" />
                        </div>
                        <div className="text-center bg-stone-800 m-4 p-4 rounded-lg">
                            <h2 className=" text-lg font-bold text-yellow-500">Working Hours</h2>
                            <p className="text-slate-300 text-lg">Mon - Fri: 08:00 - 22:00</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <ContactForm />
        </div>
    );
};

export default ContactUs;