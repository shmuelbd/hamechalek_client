import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';
import { GET_TOKEN_LOGIN } from '../../../env';
import { userDetails } from '../../../store/user';
import { useNavigate } from "react-router-dom";

const Container = styled(motion.div)`
display: flex;
flex-wrap: wrap;
width: 100%;
padding: 5px;
margin-top: 10px;
`;

const Title = styled(motion.div)`
width: 100%;
font-size: 20px;
font-weight: 900;
text-align: center;
height: 80px;
`;

type Props = {}

const Login = (props: Props) => {
    const [loading, setLoading] = useState<any>({ email: "" });
    const navigate = useNavigate();

    const load = async () => {

        axios.post(GET_TOKEN_LOGIN, {

            "email": loading.email,
            "password": loading.password

        }).then((res) => {
            setLoading(false);
            const token = { token: res.data.token, first_name: res.data.first_name }
            userDetails.value = token;
            localStorage.setItem("user", JSON.stringify(token))
            navigate("/myaccount");

        }).catch((err) => {
            console.log(err);
        })

        console.log(loading);

    };


    return (
        <Container>
            <Title>כניסה</Title>
            <InputText placeholder="אימייל" type='email' style={{ width: '100%' }} onChange={(e) => setLoading((state: any) => ({ ...state, email: e.target.value }))} />
            <InputText placeholder="סיסמה" type='password' style={{ width: '100%' }} onChange={(e) => setLoading((state: any) => ({ ...state, password: e.target.value }))} />
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Button label="כניסה" icon="pi pi-check" onClick={load} />
            </div>
        </Container>
    )
}

export default Login