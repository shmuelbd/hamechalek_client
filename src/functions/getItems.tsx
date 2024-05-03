
import axios from 'axios';



export const GetItems = async () => {


    try {
        const response = await axios.post('http://localhost:3000/web-shop/user/details', {
            "api_token": "decd03e5-e35c-41e8-84f7-fba2fb483928",
            "customer_id": "2"
        });
        // setData(response.data.data);
        // console.log(response.data.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}
