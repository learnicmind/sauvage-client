import { Parallax } from 'react-parallax';

const Cover = ({ image, title }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={image}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className=''>
                    <div className='bg-no-repeat bg-center flex bg-cover h-[620px]' >
                        <div className='flex items-center justify-center mx-4 py-20'>
                            <div className='bg-black bg-opacity-60 p-4 md:p-10 md:w-1/2 space-y-2 font-ubuntu rounded-lg'>
                                <div className='text-center'>
                                    <p className='text-4xl font-bold text-slate-300'>{title}</p>
                                </div>
                                <p className='text-slate-300 text-lg'>We invite you to join us and experience the magic of SauVage. Reserve your table now to enjoy an unforgettable dining experience that connects you with the natural world through every delectable bite. Whether its a romantic evening for two or a gathering of friends.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>

        </div>
    );
};

export default Cover;