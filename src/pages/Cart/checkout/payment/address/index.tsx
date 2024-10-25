import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { userDetails } from '../../../../../store/user';
import { progressBar } from '../../../../../store/appState';
import { GET_USER_DETAILS, melon_color } from '../../../../../env';
import { Botton } from '../../../../../components/global-components/buttons/buttons';
import { ButtonLight } from '../../../../../components/global-components/buttons/button_light';
import { cartState } from '../../../../../store/cart';
import CreditCardSvg from '../../../../../assets/svg/cerdit_card';
import AccountSvgIcon from '../../../../../assets/svg/account';
import LocationSvgIcon from '../../../../../assets/svg/location';
import CallSvgIcon from '../../../../../assets/svg/telephon';
import TaskSvgIcon from '../../../../../assets/svg/task';
import ShippingSvgIcon from '../../../../../assets/svg/shipping';
import EditSvgIcon from '../../../../../assets/svg/edit';

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
align-items: center;
justify-content: center;
/* height:17vh; */
border: 1px solid rgba(255, 255, 255, 0);
margin: 12px;
padding: 7px 7px;
border-radius: 12px;
/* background-color: ${melon_color}; */
background-color: #eeeeee;
`;

const TitleBox = styled(motion.div)`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin: 5px ;
`;
const Title = styled(motion.div)`
font-weight: 900;
font-size: 6vw;
text-align: center;
color: #252525;
`;
const P = styled(motion.div)`
display: flex;
align-items: center;
width: 100%;
font-size: 3.5vw;
font-weight: 400;
text-align: right;
color: #757575;
margin: 3px 0;
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

    const address = `${userData.street} קומה ${userData.floor} דירה ${userData.apartment}   מעלית: ${userData.elevator}, ${userData.city}`

    return (
        <Container>
            {/* <Title>הכתובת המעודכנת בעמוד הפרטים שלי</Title> */}

            <Content>
                <TitleBox>
                    <Title>פרטי משלוח</Title>
                    <EditSvgIcon />
                </TitleBox>
                <P>
                    <AccountSvgIcon />
                    {userData.last_name} {userData.first_name}
                </P>
                <P>
                    <LocationSvgIcon />
                    {address}
                </P>
                <P>
                    <CallSvgIcon />
                    {userData.phone}
                </P>
                <P>
                    <CallSvgIcon />
                    {userData.phone2}
                </P>
            </Content>
            {/* <ButtonLight>
                שינוי כתובת משלוח
                <span className="material-symbols-rounded">edit</span>
            </ButtonLight> */}
            <Content>
                <TitleBox>
                    <Title>שיטת שילוח</Title>
                    <ShippingSvgIcon />
                </TitleBox>
                <P>
                    <TaskSvgIcon />
                    משלוח חינם עד הבית
                </P>
            </Content>




        </Container>
    )
}

export default PaymentAddress