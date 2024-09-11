import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { userDetails } from '../../../../../store/user';
import { progressBar } from '../../../../../store/appState';
import { GET_USER_DETAILS } from '../../../../../env';
import { Botton } from '../../../../../components/global-components/buttons/buttons';
import { ButtonLight } from '../../../../../components/global-components/buttons/button_light';
import { cartState } from '../../../../../store/cart';
import CreditCardSvg from '../../../../../assets/svg/cerdit_card';

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
padding: 7px 7px;
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
font-weight: 400;
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
            console.log("userDetails true: ", userDetails);

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

    }, [userDetails.value])

    console.log("userData: ", userData);


    return (
        <Container>
            <Title>הכתובת המעודכנת בעמוד הפרטים שלי</Title>

            <Content>
                <Title>פרטי משלוח</Title>
                <P>{userData.last_name} {userData.first_name}</P>
                <P>{userData.street} קומה {userData.floor} דירה {userData.apartment}</P>
                <P>מעלית: {userData.elevator}</P>
                <P>{userData.city}</P>
                <P>{userData.phone}</P>
                <P>{userData.phone2}</P>
            </Content>
            <ButtonLight>
                {/* <p> */}
                לשינוי כתובת משלוח
                {/* </p> */}
                <span className="material-symbols-rounded">edit</span>
            </ButtonLight>



            <Botton>
                לתשלום מאובטח
                {/* <span className="material-symbols-rounded">credit_card</span> */}
                <CreditCardSvg />
            </Botton>
            {cartState.value.total}
        </Container>
    )
}

export default PaymentAddress