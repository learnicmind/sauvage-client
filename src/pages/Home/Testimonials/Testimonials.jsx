import feedback1 from "../../../assets/feedback1.webp"
import feedback2 from "../../../assets/feedback2.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { MdOutlineReviews } from 'react-icons/md';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://sauvage-server.vercel.app/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className="w-11/12 md:mx-auto">
            <div className="grid items-center justify-center space-y-4 text-center pt-10">
                <div className="flex items-center justify-center gap-2 md:gap-4">
                    <div>
                        <img className="md:h-12 h-10 md:w-12 w-10" src={feedback1} alt="" />
                    </div>
                    <div>
                        <h2 className="text-xl font-ubuntu text-yellow-500 text-center">What Our Clients Say</h2>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 md:gap-4">
                    <div>
                        <img className="md:h-12 h-10 md:w-12 w-10" src={feedback2} alt="" />
                    </div>
                    <div>
                        <h2 className="text-yellow-500 text-xl md:text-3xl font-ubuntu ">Testimonials</h2>
                    </div>
                </div>
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-10 text-yellow-500 ml-20">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="m-10 text-center font-ubuntu space-y-2 md:px-20 px-4 ">
                            <div className="flex items-center justify-center">
                                <MdOutlineReviews className="text-6xl pb-2"/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                            </div>
                            <p className="text-slate-300 text-xl">{review.details}</p>
                            <h2 className="text-yellow-500 text-2xl">-{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;