import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import Header from '../../components/Header';
import Footer from '../../components/footer/indes';
import { useState } from "react";

const Container = styled.div`
width: 100%;
/* min-height: 100vh; */
background-color: #ffffff;
padding-bottom: 100px;
`;
;


type UserDataType = {
    id: String,
    token: String,

}

type Props = {}

const Layout = (props: Props) => {

    return (
        <Container>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    )
}

export default Layout