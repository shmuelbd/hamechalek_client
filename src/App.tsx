import styled from 'styled-components';
import { ProgressBar } from 'primereact/progressbar';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Home from './components/home';
import 'material-symbols';
import Header from './components/Header';

const Container = styled.div`
width: 100%;
/* height: 100vh; */
background-color: #ffffff;
`;
;

type Props = {}


const App = (props: Props) => {
  return (
    <div className="App">
      <Container>
        <Header />
        <Home />
      </Container>

    </div>
  );
}

export default App;




