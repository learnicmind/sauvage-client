import logo1 from "../../../assets/logo1.png"
import ok from "../../../assets/ok1.png"
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");


    return (
        <div className="w-11/12 mx-auto">
            <div className="grid items-center justify-center space-y-4 my-10">
                <div className="flex items-center justify-center gap-4">
                    <div>
                        <img className="h-12 w-12" src={ok} alt="" />
                    </div>
                    <div>
                        <h2 className="text-xl font-ubuntu text-yellow-600 text-center">Popular Items</h2>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div>
                        <img className="h-12 w-12" src={logo1} alt="" />
                    </div>
                    <div>
                        <h2 className="text-yellow-600 text-3xl font-ubuntu">From Our Menu</h2>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-10 mb-10">
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    >
                    </MenuItems>)
                }
            </div>
            <div className='flex items-center justify-center'>
                <a className="btn px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg hover:from-yellow-700 hover:to-yellow-600 cursor-pointer  text-slate-200 font-ubuntu">View Full Menu</a>
            </div>
        </div>
    );
};

export default PopularMenu;