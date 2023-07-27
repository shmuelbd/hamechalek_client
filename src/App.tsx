import styled from 'styled-components';
import { ProgressBar } from 'primereact/progressbar';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Home from './components/home';

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #ffffff;
`;
;
const CartDiv = styled.div`
width:10px;
height: 10px;

`;
;

type Props = {}


const App = (props: Props) => {
  return (
    <div className="App">
      <Container>

        <Home />
        <CartDiv>

          {/* <Player
            autoplay
            speed={2}
            loop={true}
            src="https://lottie.host/ab8dd6d0-957f-4abd-8d82-c64b256524ee/Qzw2KsQHHU.json"
            style={{ height: '100px', width: '100px' }}
          >
          </Player> */}
        </CartDiv>
      </Container>

    </div>
  );
}

export default App;




