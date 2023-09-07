import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="w-11/12 mx-auto">
            {title && <Cover image={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 py-10">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    >
                    </MenuItems>)
                }
            </div>
            <Link to="/order">
                <div className='flex items-center justify-center mb-14'>
                    <a className="btn px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg hover:from-yellow-700 hover:to-yellow-600 cursor-pointer  text-slate-200 font-ubuntu">Order Now</a>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;