import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { cartState } from '../../../store/cart';
import { Skeleton } from 'primereact/skeleton';

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
const P = styled(motion.div) <{ aligncustom: string }>`
font-size: 18px;
font-weight: 600;
width: 100%;
text-align:${(props) => props.aligncustom} ;
`;
const Psmall = styled(motion.div) <{ aligncustom: string }>`
font-size: 14px;
width: 100%;
text-align:${(props) => props.aligncustom} ;
`;
const Progress = styled(motion.div)`
width: 100%;
padding: 2px 0;
display: flex;
justify-content: left;
`;



type Props = {}

const CheckoutLink = (props: Props) => {

    return (
        <Container>
            <RightWrapper>
                <P aligncustom="right">סה"כ לתשלום:</P>
                <Psmall aligncustom="right">משלוח חינם</Psmall>
            </RightWrapper>
            <LeftWrapper>
                {cartState.value.total ?
                    <>
                        <P aligncustom="left">₪
                            {Number(cartState.value.total).toFixed(2)}
                        </P>
                        <Psmall aligncustom="left">משלוח חינם</Psmall>
                    </>
                    :
                    <>
                        <Progress>
                            <Skeleton width="7rem" height="15px"></Skeleton>
                        </Progress>
                        <Progress>
                            <Skeleton width="5rem" height="10px"></Skeleton>
                        </Progress>


                    </>
                }
            </LeftWrapper>
        </Container>
    )
}

export default CheckoutLink