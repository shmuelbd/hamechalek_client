import React from 'react'
import { cartState } from '../../../../../store/cart'
import { Botton } from '../../../../../components/global-components/buttons/buttons';
import CreditCardSvg from '../../../../../assets/svg/cerdit_card';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
`;
const Line = styled(motion.div)`
border-top: #e9e9e9 solid 1px;
width: 90%;
margin: 15px ;

`
const TitleBox = styled(motion.div)`
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Title = styled(motion.div)`
font-weight: 900;
font-size: 6vw;
text-align: center;
color: #252525;
`;

const P = styled(motion.div)`
color: #757575;
font-size: 4vw;
`;

const PaymentMethod = () => {
    return (
        <Container>
            <Line />
            <TitleBox>
                <P> סה"כ הנחות ומבצעים: </P>
                <P>35-  ₪ </P>
            </TitleBox>
            <TitleBox>
                <P>עלות משלוח: </P>
                <P>חינם</P>
            </TitleBox>
            <TitleBox>
                <Title>סה"כ לתשלום:</Title>
                <Title>{cartState.value.total} ₪ </Title>
            </TitleBox>

            <Botton>
                המשך לתשלום
                <CreditCardSvg />
            </Botton>

        </Container>
    )
}

export default PaymentMethod