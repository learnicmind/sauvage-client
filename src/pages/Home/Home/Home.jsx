import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import Highlighted from "../Highlighted/Highlighted";
import PopularMenu from "../PopularMenu/PopularMenu";
import SectionTitle from "../SectionTitle/SectionTitle";
import Testimonials from "../Testimonials/Testimonials";
import logo1 from "../../../assets/logo1.png"
import ok from "../../../assets/ok1.png"


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sauvage | Home</title>
            </Helmet>
            <Banner />
            <SectionTitle 
            img1={ok}
            subheading={"From 11:00am to 10:00pm"}
            img2={logo1}
            heading={"Order Online"}
              />
            <Category />
            <FeaturedSection />
            <PopularMenu />
            <ChefRecommends />
            <Highlighted />
            <Testimonials />
        </div>
    );
};

export default Home;

