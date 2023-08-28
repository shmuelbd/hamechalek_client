import {
    atom,
} from 'recoil';




export const userDetails = atom({
    key: 'userDetails',
    default:
    {
        customer_id: '123',
        first_name: '123',
        last_name: '',
        street: '',
        city: '',
        phone: '',
        email: '',
        balance: '',
        isloginng: '',
        token: '',
    },
});


