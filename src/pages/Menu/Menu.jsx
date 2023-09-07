import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import image from '../../assets/menuimage.jpg'
import dessertImg from '../../assets/desserts.jpg'
import pizzaImg from '../../assets/pizza2.avif'
import saladImg from '../../assets/salad4.jpg'
import soupImg from '../../assets/soup.jpg'
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../Home/SectionTitle/SectionTitle";
import logo1 from "../../../src/assets/logo1.png"
import ok from "../../../src/assets/ok1.png"
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const offered = menu.filter(item => item.category === "offered")

    return (
        <div>
            <Helmet>
                <title>Sauvage | Our Menu</title>
            </Helmet>

            <Cover 
            image={image} 
            title={"Our Menu"}
             />
            {/* main cover */}
            <SectionTitle 
            img1={ok}
            subheading={"Don't Miss"}
            img2={logo1}
            heading={"Today's Offer"}
            />
            {/* offered items */}
            <MenuCategory items={offered}/>
            {/* dessert items */}
            <MenuCategory 
            items={desserts} 
            title={"desserts"} 
            img={dessertImg}
            />
            {/* pizza */}
            <MenuCategory 
            items={pizza}
            title={"pizza"}
            img={pizzaImg}
            />
            {/* salad */}
            <MenuCategory 
            items={salad}
            title={"palad"}
            img={saladImg}
            />
            {/* soup */}
            <MenuCategory 
            items={soup}
            title={"soup"}
            img={soupImg}
            />
        </div>
    );
};

export default Menu;