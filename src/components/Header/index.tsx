import styled from 'styled-components';
import logo from '../../assets/logo.png';

const Container = styled.div`
width: 100%;
height: 50px;
background-color: #ffffff;
/* background-color: #f3f3f3; */
display: flex;
align-items: center;
justify-content: center;
font-family: 'Rubik', sans-serif;
font-weight: 900;
padding-top: 5px;
`;
const Img = styled.img`
width: 90px;
`;

type Props = {}

const Header = (props: Props) => {
    return (
        <Container>
            <Img src={logo}></Img>
        </Container>
    )
}

export default Header