import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Categories from "./Categories"
import Home from "../components/home"
import ScrollToTop from "../functions/ScrollToTop"
import Items from "./Items"
import OneItem from "../components/oneItem"
import Account from "./Account"
import LastOrders from "./Account/LastOrders"
import OrderDetail from "./Account/LastOrders/OrderDetail"
import Login from "./Account/login"
import MyDetails from "./Account/MyDetails"
import Register from "./Account/Register"
import SendEmailForgetPassword from "./Account/SendEmailForgetPassword"
import Cart from "./Cart"


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
                    <Route path="cart" element={<Cart />} />
                    <Route path="items/:catid" element={<Items />} />
                    <Route path="item/:catid/:itemid" element={<OneItem />} />
                    <Route path="myaccount">
                        <Route index element={<Account />} />
                        {/* <Route path="login" element={<Login />} ></Route> */}
                        {/* <Route path="register" element={<Register />} ></Route> */}
                        <Route path="send-email-forget-password/:token/:newUser" element={<SendEmailForgetPassword />} ></Route>
                        <Route path="MyDetails" element={<MyDetails />} ></Route>
                        {/* <Route path="signin" element={<Login />} ></Route> */}
                        <Route path="lastorders"  >
                            <Route index element={<LastOrders />} />
                            <Route path=":docid/:typeid" element={<OrderDetail />} />
                        </Route>
                    </Route>
                </Route>
                {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
        </BrowserRouter >
    )
}

export default Router