import logo1 from "../../../assets/logo1.png"
import ok from "../../../assets/ok1.png"
import salad1 from "../../../assets/salad1.avif"
import salad2 from "../../../assets/salad2.avif"
import salad3 from "../../../assets/salad3.avif"
import sideImg1 from "../../../assets/sideimg1.webp"
import sideImg2 from "../../../assets/sideimg2.avif"

const ChefRecommends = () => {
    return (
        <div className="w-11/12 mx-auto relative">
            <img className="md:h-28 md:w-28 w-14 h-14 -rotate-3 absolute" src={sideImg1} alt="" />
            <img className="md:h-28 md:w-28 w-14 h-14 rotate-6 absolute right-0" src={sideImg2} alt="" />
            <div className="grid items-center justify-center space-y-4 my-10 md:mt-16">
                <div className="flex items-center justify-center gap-2 md:gap-4">
                    <div>
                        <img className="md:h-12 h-10 md:w-12 w-10" src={ok} alt="" />
                    </div>
                    <div>
                        <h2 className="text-xl font-ubuntu text-yellow-600 text-center">Should Try</h2>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 md:gap-4">
                    <div>
                        <img className="md:h-12 h-10 md:w-12 w-10" src={logo1} alt="" />
                    </div>
                    <div>
                        <h2 className="text-yellow-600 text-xl md:text-3xl font-ubuntu">Chef Recommends</h2>
                    </div>
                </div>
            </div>


            <div className="grid md:grid-cols-3 items-center justify-center gap-10 md:ml-12">
                <div className="">
                    <img className="md:h-80 h-80 w-80" src={salad1} alt="" />
                    <div className="pr-16 space-y-2 bg-stone-950 w-80 p-2">
                        <h2 className="text-yellow-500 font-semibold text-xl">Casear Salad</h2>
                        <p className="text-lg font-semibold text-slate-300">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="bg-yellow-700 px-3 py-2 hover:bg-yellow-800 text-lg text-slate-300 rounded-lg">Add to Cart</button>
                    </div>
                </div>
                <div className="">
                    <img className="md:h-80 h-80 w-80" src={salad2} alt="" />
                    <div className="pr-16 space-y-2  bg-stone-950 w-80 p-2">
                        <h2 className="text-yellow-500 font-semibold text-xl">Casear Salad</h2>
                        <p className="text-lg font-semibold text-slate-300">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="bg-yellow-700 px-3 py-2 hover:bg-yellow-800 text-lg text-slate-300 rounded-lg">Add to Cart</button>
                    </div>
                </div>
                <div className="">
                    <img className="md:h-80 h-80 w-80" src={salad3} alt="" />
                    <div className="pr-16 space-y-2  bg-stone-950 w-80 p-2">
                        <h2 className="text-yellow-500 font-semibold text-xl">Casear Salad</h2>
                        <p className="text-lg font-semibold text-slate-300">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="bg-yellow-700 px-3 py-2 hover:bg-yellow-800 text-lg text-slate-300 rounded-lg">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;