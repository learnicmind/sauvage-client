import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import orderImg from "../../../assets/orderImg.jpg"
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { Helmet } from "react-helmet-async";


const Order = () => {

    const [tabIndex, setTabIndex] = useState(0)

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const drinks = menu.filter(item => item.category === "drinks")
    const offered = menu.filter(item => item.category === "offered")

    return (
        <div>
            <Helmet>
                <title>Sauvage | Order</title>
            </Helmet>
            <Cover image={orderImg} title={"Order Now"} />
            <Tabs className="py-20 w-11/12 mx-auto" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-yellow-500 flex items-center justify-center">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Offered</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={offered} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;