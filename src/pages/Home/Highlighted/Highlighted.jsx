import logo1 from "../../../assets/logo1.png"
import ok from "../../../assets/ok1.png"
import featured from "../../../assets/featured.jpg"

const Highlighted = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat bg-fixed my-10" style={{ backgroundImage: `url(${featured})` }}>

            <div className="bg-slate-900 bg-opacity-60">
                <div className="grid items-center justify-center space-y-4 text-center pt-10">
                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        <div>
                            <img className="md:h-12 h-10 md:w-12 w-10" src={ok} alt="" />
                        </div>
                        <div>
                            <h2 className="text-xl font-ubuntu text-yellow-500 text-center">Check it out</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        <div>
                            <img className="md:h-12 h-10 md:w-12 w-10" src={logo1} alt="" />
                        </div>
                        <div>
                            <h2 className="text-yellow-500 text-xl md:text-3xl font-ubuntu">From our Menu</h2>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 items-center justify-center py-10 px-4">
                    <div className="md:ml-56">
                        <img className="md:w-96 md:h-64" src={featured} alt="" />
                    </div>
                    <div className=" md:mr-44 space-y-2">
                        <h2 className="text-yellow-500 font-semibold text-xl">August 20, 2023</h2>
                        <h3 className="text-yellow-500 font-semibold text-xl">WHERE CAN I GET SOME?</h3>
                        <p className="text-slate-200 font-semibold text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="bg-yellow-700 px-3 py-2 hover:bg-yellow-800 text-lg text-slate-300 rounded-lg">Read More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Highlighted;
