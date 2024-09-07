import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import "./payment.css"
import PaymentHeader from './header';
import PaymentAddress from './address';
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
border: none !important;
/* background-color: #ff2600; */
&.input {
    background-color: #0011ff;
    color: #0084ff;
  }
`;

type Props = {}

const Payment = (props: Props) => {
    return (
        <Container>
            {/* <IFrame className="IFrame" src="https://testicredit.rivhit.co.il/payment/PaymentItems.aspx?GroupId=80eb70bf-8b26-4dd6-affa-499eb360a64d&Token=31fabbde-9c50-4c61-b78c-0a124baef5e6" </IFrame> */}
            <PaymentHeader />
            <PaymentAddress />
        </Container>
    )
}

export default Payment