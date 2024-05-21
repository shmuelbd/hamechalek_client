import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import "./payment.css"
const Container = styled(motion.div)`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
`;
const IFrame = styled.iframe`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
height: 550px;
border: none;
/* background-color: #ff2600; */
&.input {
    background-color: #ff2600;
    color: #ff2600;
  }
`;

type Props = {}

const Payment = (props: Props) => {
    return (
        <Container>Payment
            <IFrame className="IFrame" src="https://testicredit.rivhit.co.il/payment/PaymentItems.aspx?GroupId=80eb70bf-8b26-4dd6-affa-499eb360a64d&Token=97b639df-5b8e-4196-a873-a29e0d3fa3b7"
            >

            </IFrame>


        </Container>
    )
}

export default Payment