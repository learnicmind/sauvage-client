import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/slide1.jpg'
import slide2 from '../../../assets/slide2.jpg'
import slide3 from '../../../assets/slide3.jpg'
import slide4 from '../../../assets/slide4.jpg'
import slide5 from '../../../assets/slide5.jpg'
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='w-11/12 mx-auto mb-10'>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                autoplay
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-96 w-72">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded" src={slide1} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-300 group-hover:from-yellow-200 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="text-yellow-400 text-2xl md:text-4xl">Salads</h1>
                                
                                <Link to='/order'>
                                    <button className='md:btn btn-sm border-0 border-[#e9c31d] border-r-4 border-b-4 hover:bg-[#333008] hover:border-[#e9c31d] text-yellow-400 hover:text-yellow-500 bg-[#333008] mt-4'>Order Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-96 w-72">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded" src={slide2} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-300 group-hover:from-yellow-200 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="text-yellow-400 text-2xl md:text-4xl">Pizza</h1>
                                
                                <Link to='/order'>
                                    <button className='md:btn btn-sm border-0 border-[#e9c31d] border-r-4 border-b-4 hover:bg-[#333008] hover:border-[#e9c31d] text-yellow-400 hover:text-yellow-500 bg-[#333008] mt-4'>Order Now</button>
                                </Link>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-96 w-72">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded" src={slide3} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-300 group-hover:from-yellow-200 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="text-yellow-400 text-2xl md:text-4xl">Soup</h1>
                                
                                <Link to='/order'>
                                    <button className='md:btn btn-sm border-0 border-[#e9c31d] border-r-4 border-b-4 hover:bg-[#333008] hover:border-[#e9c31d] text-yellow-400 hover:text-yellow-500 bg-[#333008] mt-4'>Order Now</button>
                                </Link>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-96 w-72">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded" src={slide4} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-300 group-hover:from-yellow-200 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="text-yellow-400 text-2xl md:text-4xl">Desserts</h1>
                                
                                <Link to='/order'>
                                    <button className='md:btn btn-sm border-0 border-[#e9c31d] border-r-4 border-b-4 hover:bg-[#333008] hover:border-[#e9c31d] text-yellow-400 hover:text-yellow-500 bg-[#333008] mt-4'>Order Now</button>
                                </Link>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="h-96 w-72">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded" src={slide5} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-300 group-hover:from-yellow-200 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="text-yellow-400 text-2xl md:text-4xl">Salads</h1>
                                
                                <Link target='_blank' to='/order'>
                                    <button className='md:btn btn-sm border-0 border-[#e9c31d] border-r-4 border-b-4 hover:bg-[#333008] hover:border-[#e9c31d] text-yellow-400 hover:text-yellow-500 bg-[#333008] mt-4'>Order Now</button>
                                </Link>
                            </div>
                        </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;