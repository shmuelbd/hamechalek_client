import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Categories from "./Categories"
import Home from "../components/home"
import ScrollToTop from "../functions/ScrollToTop"
import Items from "./Items"
import OneItem from "../components/oneItem"
import Account from "./Account"
import LastOrders from "./Account/LastOrders"


const Router = () => {
    return (
        <BrowserRouter basename="/">
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="profile" element={<Home />} />
                    <Route path="sale" element={<Home />} />
                    <Route path="cart" element={<Home />} />
                    <Route path="items/:catid" element={<Items />} />
                    <Route path="item/:catid/:itemid" element={<OneItem />} />
                    <Route path="myaccount">
                        <Route index element={<Account />} />
                        <Route path="lastorders" element={<LastOrders />} />
                    </Route>
                </Route>
                {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router