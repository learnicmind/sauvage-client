import chef from '../../../assets/chef.jpg'

const FeaturedSection = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='bg-no-repeat bg-center w-full flex bg-cover ' style={{ backgroundImage: `url(${chef})` }}>
                <div className='flex items-center justify-center mx-4 py-20'>
                    <div className='bg-black bg-opacity-80 p-4 md:p-10 md:w-1/2 space-y-2 font-ubuntu rounded-lg'>
                    <a className="text-yellow-600 text-3xl font-bold"><span className="text-yellow-500 text-4xl">S</span>au<span className="text-yellow-500 text-4xl">V</span>age</a>
                    <p className='text-slate-300 text-lg'>We invite you to join us and experience the magic of SauVage. Reserve your table now to enjoy an unforgettable dining experience that connects you with the natural world through every delectable bite. Whether its a romantic evening for two or a gathering of friends.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSection;