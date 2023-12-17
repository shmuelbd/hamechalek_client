import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';

const Container = styled(motion.div)`
display: flex;
flex-wrap: wrap;
width: 100%;

`;


type Props = {}

const Login = (props: Props) => {
    return (
        <Container>Login</Container>
    )
}

export default Login