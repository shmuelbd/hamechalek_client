import 'material-symbols';
import { useRecoilState } from 'recoil';
import { userDetails } from './states/userDetails';
import { useEffect } from 'react';
import { GetDetails } from './functions/user';

import Router from './pages/Router';







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
      <Router />
    </div>
  );
}

export default App;




