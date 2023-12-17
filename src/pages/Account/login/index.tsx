import React from 'react'
import { InputText } from 'primereact/inputtext';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
    return (
        <Container>
            <Title>כניסה</Title>

            <InputText placeholder="אימייל" type='email' />
            <InputText placeholder="סיסמה" type='password' />
        </Container>
    )
}

export default Login