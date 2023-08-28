
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userDetails } from '../states/userDetails';



export const GetDetails = async () => {

    // const [data, setData] = useRecoilState(userDetails);


    try {
        const response = await axios.post('http://localhost:3000/web-shop/user/details', {
            "api_token": "decd03e5-e35c-41e8-84f7-fba2fb483928",
            "customer_id": "2"
        });
        // setData(response.data.data);
        console.log(response.data.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}