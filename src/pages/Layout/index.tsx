import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import Header from '../../components/Header';
import Footer from '../../components/footer/indes';


const Container = styled.div`
width: 100%;
/* min-height: 100vh; */
background-color: #ffffff;
`;
;


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