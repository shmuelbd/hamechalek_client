import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { cartState } from '../../../store/cart';


const Container = styled(motion.div)`
width: 100%;
height: 130px; 
background-color: #fffffff8;
display: flex;
flex-wrap: wrap;
justify-content: center;
position: fixed;
bottom: 75px !important;
border-top: 2px solid #e9e9e9f8;
box-sizing: border-box;
padding: 5px;
`;

const RightWrapper = styled(motion.div)`
width: 50%;
display: flex;
flex-wrap: wrap;
justify-content: right;
align-content: center;
`;
const LeftWrapper = styled(motion.div)`
width: 50%;
display: flex;
justify-content: left;
flex-wrap: wrap;
align-content: center;
`;
const P = styled(motion.div) <{ textAligncustom: string }>`
font-size: 18px;
font-weight: 600;
width: 100%;
text-align:${(props) => props.textAligncustom} ;
`;
const Psmall = styled(motion.div) <{ textAligncustom: string }>`
font-size: 14px;
width: 100%;
text-align:${(props) => props.textAligncustom} ;
`;



type Props = {}

const CheckoutLink = (props: Props) => {

    const [cart, setcart] = useState<any>(cartState.value)
    const [sum, setSum] = useState<any>()

    useEffect(() => {
        let total = 0
        cartState.value.map((item: any) => total += Number(item.total))
        setSum(total.toFixed(2))
    }, [cartState.value])

    return (
        <Container>
            <RightWrapper>
                <P textAligncustom="right">סה"כ לתשלום:</P>
                <Psmall textAligncustom="right">משלוח חינם</Psmall>
            </RightWrapper>
            <LeftWrapper>
                <P textAligncustom="left">{sum}</P>
                <Psmall textAligncustom="left">משלוח חינם</Psmall>
            </LeftWrapper>
        </Container>
    )
}

export default CheckoutLink