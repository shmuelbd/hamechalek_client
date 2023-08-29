import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Categories from "./Categories"
import Home from "../components/home"
import ScrollToTop from "../functions/ScrollToTop"



const Router = () => {
    return (
        <BrowserRouter basename="/">
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/profile" element={<Home />} />
                    <Route path="/sale" element={<Home />} />
                    <Route path="/cart" element={<Home />} />
                </Route>
                {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router