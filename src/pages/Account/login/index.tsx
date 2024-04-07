import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';
import { GET_TOKEN_LOGIN } from '../../../env';
import { userDetails } from '../../../store/user';
import { NavLink, useNavigate } from "react-router-dom";
import { Botton } from '../../../components/global-components/buttons/buttons';
import { BoxFiled } from '../../../components/global-components/inputs/inputs';
import ProgressBarCustom from '../../../components/global-components/progressBar/progressBar';
import { progressBar } from '../../../store/appState';
import { cartState, user_cart } from '../../../store/cart';

const Container = styled(motion.div)`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 100%;
margin-top: 10px;
`;

const Title = styled(motion.div)`
width: 100%;
font-size: 20px;
font-weight: 900;
text-align: center;
height: 80px;
`;
const Item = styled(NavLink)`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
font-size: 18px;
width: 100%;
margin: 5px 15px;
text-decoration: none;
cursor: pointer;
user-select: none;
border-radius: 5px;
height: 20px;
color: #7F5AFF;
`;


type Props = {}

const Login = (props: Props) => {
    const [loading, setLoading] = useState<any>({ email: "" });
    const [ProgressBar, setProgressBar] = useState<boolean>(false);
    const navigate = useNavigate();

    const load = async () => {
        progressBar.value = true;
        axios.post(GET_TOKEN_LOGIN, {
            "email": loading.email,
            "password": loading.password
        }).then(async (res) => {
            progressBar.value = false;
            setLoading(false);
            const token = { token: res.data.token, first_name: res.data.first_name }
            userDetails.value = token;
            localStorage.setItem("user", JSON.stringify(token))
            navigate("/myaccount");
            let cart = await user_cart()
            cartState.value = cart;
        }).catch((err) => {
            console.log(err);
            progressBar.value = false;
        })

    };
    const styleBox = {
        width: '100%',
        color: 'black',
        border: 'none',
        backgroundColor: "#f3f3f3ca",
    }

    return (
        <>
            {ProgressBar ? <ProgressBarCustom /> : null}
            <Container>
                {/* <Title>כניסה</Title> */}
                <BoxFiled>
                    <label htmlFor="first_name">אימייל</label>
                    <InputText id="first_name"
                        type='email'
                        aria-describedby="first_name-help"
                        style={styleBox}
                        onChange={(e) => setLoading((state: any) => ({ ...state, email: e.target.value }))} />
                    {/* <small id="first_name-help">
                                מקסימום 20 תווים
                            </small> */}
                </BoxFiled>
                <BoxFiled>
                    <label htmlFor="first_name">סיסמה</label>
                    <InputText id="first_name"
                        type='password'
                        aria-describedby="first_name-help"
                        style={styleBox}
                        onChange={(e) => setLoading((state: any) => ({ ...state, password: e.target.value }))} />
                    {/* <small id="first_name-help">
                                מקסימום 20 תווים
                            </small> */}
                </BoxFiled>

                <Botton onClick={load}>
                    כניסה
                    <span className="material-symbols-rounded">login</span>

                </Botton>
                <Item to={"send-email-forget-password/token/newUser"}>לקוחות חדשים / שכחתי סיסמה</Item>
            </Container>
        </>
    )
}

export default Login