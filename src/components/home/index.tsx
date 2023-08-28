import styled from 'styled-components';
import SaleBunner from './SaleBunner';
import s from '../../assets/bgmilk2.jpg';
import Categories from './Categories';
import SearchBox from './SearchBox';
import Footer from '../footer/indes';


const Container = styled.div`
width: 100%;
height: 100%;
/* padding-top: 40px; */
/* background-image: url(${s}) ;
background-size:contain;
background-repeat: no-repeat;
background-position-y: 40% ; */
;
`;

const Bg = styled.img`
background-image: url(${s}) ;
background-size:cover;
background-position: center;
background-repeat: no-repeat;
height: 410px;
width: 90%;
margin-top: 20px;
margin-bottom: 17px;
border-radius: 12px;
margin-left: 5%;
margin-right: 5%;
`;
;

type Props = {}

const Home = (props: Props) => {


    return (
        <Container>
            <SaleBunner />
            <SearchBox />
            <Bg />
            <Categories />
            <Footer />
        </Container>

    )
}

export default Home