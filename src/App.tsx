import 'material-symbols';
import Router from './pages/Router';
import { useEffect } from 'react';
import { GET_TOKEN_VERIFY } from './env';
import axios from 'axios';
import { userDetails } from './store/user';
import { cartState, user_cart } from './store/cart';


type Props = {}

const App = (props: Props) => {

  useEffect(() => {
    if (localStorage.getItem("user") != null && localStorage.getItem("user") != undefined) {
      const tokenjson = JSON.parse(localStorage.getItem("user") || "");
      userDetails.value = tokenjson.token;

      axios.post(GET_TOKEN_VERIFY, {
        "token": tokenjson.token
      }).then((res) => {
        const token = { token: res.data.token, first_name: res.data.first_name }
        userDetails.value = token;
        localStorage.setItem("user", JSON.stringify(token))
        user_cart()

      }).catch((err) => {
        console.log(err);
      })

      userDetails.value = tokenjson.token;
    }
  }, [])


  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;




