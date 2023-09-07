// import bannerImg from '../../../assets/bannerimg1.jpg'
import pizza from '../../../assets/pizza.png'
import './banner.css'

const Banner = () => {
    return (
        // <section className='bg-cover bg-center relative flex justify-center h-screen' style={{ backgroundImage: `url(${bannerImg})` }} >
        // </section>
        <section>
            <div className='bg-black opacity-80  items-center justify-center gap-10 py-3 md:py-10  md:px-48 px-14 md:mx-0 mx-10 rounded-lg md:w-3/4  content hidden md:block'>
                <div className='space-y-2 relative md:text-justify text-center font-ubuntu'>
                <a className="text-yellow-600 text-3xl font-bold"><span className="text-yellow-500 text-4xl">S</span>au<span className="text-yellow-500 text-4xl">V</span>age</a>
                    <p className='text-slate-300 text-xl '>We invite you to join us and experience the magic of SauVage. Reserve your table now to enjoy an unforgettable dining experience that connects you with the natural world through every delectable bite. Whether its a romantic evening for two or a gathering of friends, let SauVage be the backdrop to your next memorable dining occasion.</p>
                    <img className='absolute hidden md:block left-[116px] -top-6 h-10 w-30 md:h-16 md:w-44 shadow  rounded-lg translate-x-4' src={pizza} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;