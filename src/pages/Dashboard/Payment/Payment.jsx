import SectionTitle from "../../Home/SectionTitle/SectionTitle";
import payment1 from "../../../assets/payment1.png"
import payment2 from "../../../assets/payment2.png"
import { Helmet } from "react-helmet-async";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));


    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>Sauvage | Payment</title>
            </Helmet>
            <SectionTitle
                subheading={"Please Process"}
                heading={"Payment"}
                img1={payment2}
                img2={payment1}
            ></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;