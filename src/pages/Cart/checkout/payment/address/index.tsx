import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { userDetails } from '../../../../../store/user';
import { progressBar } from '../../../../../store/appState';
import { GET_USER_DETAILS } from '../../../../../env';
import { Botton } from '../../../../../components/global-components/buttons/buttons';
import { Button_light } from '../../../../../components/global-components/buttons/button_light';
import { cartState } from '../../../../../store/cart';

const Container = styled(motion.div)`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
`;
const Content = styled(motion.div)`
display: flex;
flex-wrap: wrap;
width: 100%;
font-size: 20px;
font-weight: 900;
align-items: center;
justify-content: center;
/* height:17vh; */
border: 1px solid rgb(224, 224, 224);
margin: 12px;
padding: 2px 7px;
border-radius: 12px;
`;
const Title = styled(motion.div)`
width: 100%;
font-size: 15px;
text-align: center;
color: #636363;
`;
const P = styled(motion.div)`
width: 100%;
font-size: 12px;
text-align: right;
color: #636363;
`;

type Props = {}
const dataForFromEmail = {
    "last_name": "",
    "first_name": "",
    "street": "",
    "city": "",
    "zipcode": "",
    "apartment": "",
    "floor": "",
    "elevator": "",
    "phone": "",
    "phone2": "",
    "fax": "",
}

const PaymentAddress = (props: Props) => {
    const [userData, setUserData] = useState<any>(dataForFromEmail)



    useEffect(() => {
        //התנאי הזה הוא בשביל שלא יעשה קריאה ללא שיש טוקן 
        if (userDetails.value.token) {
            progressBar.value = true;

            // setUserData(dataForFromEmail)
            axios.post(GET_USER_DETAILS, {
                "token": userDetails.value.token
            }).then((res) => {
                progressBar.value = false;
                setUserData(res.data)
            }).catch((err) => {
                progressBar.value = false;
                setUserData(dataForFromEmail)
            })

        }

    }, [])

    console.log("userData: ", userData);


    return (
        <Container>
            <Title>הכתובת המעודכנת בעמוד הפרטים שלי</Title>

            <Content>
                <Title>פרטי משלוח</Title>
                <P>שם: {userData.last_name}</P>
                <P>עיר:</P>
                <P>רחוב:</P>
                <P>מספר:</P>
                <P>קומה:</P>
                <P>דירה:</P>
            </Content>
            <Button_light>לשינוי כתובת משלוח</Button_light>
            <Botton>לתשלום מאובטח</Botton>
            {cartState.value.total}
        </Container>
    )
}

export default PaymentAddress