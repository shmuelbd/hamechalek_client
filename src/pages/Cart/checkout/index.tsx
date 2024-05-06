import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { cartState } from '../../../store/cart';
import { Skeleton } from 'primereact/skeleton';
import { Botton } from '../../../components/global-components/buttons/buttons';

const Container = styled(motion.div)`
width: 100%;
height: 130px; 
background-color: #ffffff;
display: flex;
flex-wrap: wrap;
justify-content: center;
position: fixed;
bottom: 75px !important;
border-top: 2px solid #e9e9e9f8;
box-sizing: border-box;
padding: 5px;
padding-top: 7px;
`;

const RightWrapper = styled(motion.div)`
width: 50%;
display: flex;
flex-wrap: wrap;
justify-content: right;
align-content: center;
padding-right: 10px;
`;
const LeftWrapper = styled(motion.div)`
padding-left: 10px;
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
display: flex;
align-items: center;
justify-content: end;
font-size: 14px;
width: 100%;
text-align:${(props) => props.aligncustom} ;
& span{
        margin: 0 2px;
        font-size: 14px;
color: #00b800;
    }
`;
const Progress = styled(motion.div)`
width: 100%;
padding: 2px 0;
display: flex;
justify-content: left;
`;
const ButtonBox = styled(motion.div)`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;



type Props = {}

const CheckoutLink = (props: Props) => {

    return (
        <Container>
            <RightWrapper>
                <P aligncustom="right">סה"כ לתשלום:</P>
                {/* <Psmall aligncustom="right">משלוח חינם</Psmall> */}
            </RightWrapper>
            <LeftWrapper>
                {cartState.value.total || cartState.value.total === 0 ?
                    <>
                        <P aligncustom="left">₪
                            {Number(cartState.value.total).toFixed(2)}
                        </P>
                        <Psmall aligncustom="left">
                            <span className="material-symbols-rounded">task_alt</span>
                            משלוח חינם
                        </Psmall>

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
            <ButtonBox>
                <Botton>המשיכו לקופה
                    <span className="material-symbols-rounded">shopping_cart_checkout</span>

                </Botton>
            </ButtonBox>
        </Container>
    )
}

export default CheckoutLink