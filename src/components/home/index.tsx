import styled from 'styled-components';
import SaleBunner from './SaleBunner';


const Container = styled.div`
width: 100%;
padding-top: 40px;


`;
;

type Props = {}

const Home = (props: Props) => {


    return (
        <Container>
            <SaleBunner />
        </Container>

    )
}

export default Home