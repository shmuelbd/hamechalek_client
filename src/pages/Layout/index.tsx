import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import Header from '../../components/Header';
import Footer from '../../components/footer/indes';
import { useState } from "react";

const Container = styled.div`
width: 100%;
/* min-height: 100vh; */
background-color: #ffffff;
`;
;


type UserDataType = {
    id: String,
    token: String,

}

type Props = {}

const Layout = (props: Props) => {
    const [userData, setUserData] = useState<UserDataType>()
    const [cart, setCart] = useState()

    return (
        <Container>
            <Header />
            <Outlet context={[userData, setUserData, cart, setCart]} />
            <Footer />
        </Container>
    )
}

export default Layout