import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import Stepper from './stepper';

const Container = styled(motion.div)`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
`;
const Title = styled(motion.div)`
display: flex;
flex-wrap: wrap;
width: 100%;
font-size: 20px;
font-weight: 900;
align-items: center;
justify-content: center;
height: 80px;
`;

type Props = {}

const PaymentHeader = (props: Props) => {
    return (
        <Container>
            {/* <Title>עמוד התשלום</Title> */}
            <Stepper />
        </Container>
    )
}

export default PaymentHeader