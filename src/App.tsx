import styled from 'styled-components';
import { ProgressBar } from 'primereact/progressbar';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Home from './components/home';
import 'material-symbols';
import Header from './components/Header';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userDetails } from './states/userDetails';
import { useEffect } from 'react';
import { GetDetails } from './functions/user';

const Container = styled.div`
width: 100%;
/* height: 100vh; */
background-color: #ffffff;
`;
;

type Props = {}






const App = (props: Props) => {
  const [data, setData] = useRecoilState(userDetails);

  useEffect(() => {

    const getData: any = GetDetails();
    setData(getData ? getData?.data?.data : null);
    // console.log(data);

  })


  return (
    <div className="App">
      <Container>
        <Header />
        <Home />
      </Container>
      {/* {
        data.map((i: any, item: any) => {
          return (
            <div>{item.first_name}</div>
          )
        })
      } */}
    </div>
  );
}

export default App;




