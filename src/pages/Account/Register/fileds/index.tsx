import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ProgressBar } from 'primereact/progressbar';
import { InputText } from 'primereact/inputtext';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BoxFiled } from '../../../../components/global-components/inputs/inputs';
import { Botton } from '../../../../components/global-components/buttons/buttons';
import ProgressBarCustom from '../../../../components/global-components/progressBar/progressBar';
import { userDetails } from '../../../../store/user';
import { GET_USER_DETAILS, GET_USER_DETAILS_UPDATE } from '../../../../env';

type Props = {}


const Title = styled(motion.p)`
width: 100%;
font-size: 20px;
text-align: center;
font-weight: 900;
`;
const ContainerUserDetails = styled(motion.div)`
display: flex;
flex-wrap: wrap;
width: 100%;
padding: 5px;
margin: 0;
margin-top: 10px;
/* background-color: #f5f5f5; */
justify-content: center;
`;


const FiledsNewUser = (props: any) => {
    const [userData, setUserData] = useState<any>({})
    const [edit, setEdit] = useState<any>(true)

    const styleBox = {
        width: '100%',
        color: 'black',
        border: 'none',
        backgroundColor: "#f3f3f3ca",
        marginTop: '5px'

    }

    const dataToSend = { ...userData, "token": userDetails.value.token }

    const sendUserDate = () => {
        axios.post(GET_USER_DETAILS_UPDATE, dataToSend)
            .then((res) => {
                setEdit(!edit)
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <Title>הפרטים שלי</Title>

            <ContainerUserDetails>
                <BoxFiled>
                    <label htmlFor="first_name">שם פרטי</label>
                    <InputText id="first_name"
                        aria-describedby="first_name-help"
                        value={userData.first_name}
                        style={styleBox}
                        disabled={!edit}
                        onChange={(e) => setUserData({ ...userData, first_name: e.target.value })} />
                    <small id="first_name-help">
                        מקסימום 20 תווים
                    </small>
                </BoxFiled>
                <BoxFiled>
                    <label htmlFor="last_name">שם משפחה</label>
                    <InputText id="last_name"
                        aria-describedby="last_name-help"
                        value={userData.last_name}
                        style={styleBox}
                        disabled={!edit}
                        onChange={(e) => setUserData({ ...userData, last_name: e.target.value })} />
                    <small id="last_name-help">
                        מקסימום 30 תווים
                    </small>
                </BoxFiled>
                <BoxFiled>
                    <label htmlFor="street">רחוב</label>
                    <InputText id="street"
                        aria-describedby="street-help"
                        value={userData.street}
                        style={styleBox}
                        disabled={!edit}
                        onChange={(e) => setUserData({ ...userData, street: e.target.value })} />
                    <small id="street-help">
                        מקסימום 30 תווים
                    </small>
                </BoxFiled>
                <BoxFiled>
                    <label htmlFor="street">דירה</label>
                    <InputText id="street"
                        aria-describedby="street-help"
                        value={userData.apartment}
                        style={styleBox}
                        disabled={!edit}
                        type="number"
                        onChange={(e) => setUserData({ ...userData, apartment: e.target.value })} />
                    <small id="street-help">
                        מקסימום 30 תווים
                    </small>
                </BoxFiled>
                <BoxFiled>
                    <label htmlFor="street">קומה</label>
                    <InputText id="street"
                        aria-describedby="street-help"
                        value={userData.floor}
                        style={styleBox}
                        disabled={!edit}
                        type="number"
                        onChange={(e) => setUserData({ ...userData, floor: e.target.value })} />
                    <small id="street-help">
                        מקסימום 30 תווים
                    </small>
                </BoxFiled>
                <BoxFiled>
                    <label htmlFor="street">מעלית</label>
                    <InputText id="street"
                        aria-describedby="street-help"
                        value={userData.elevator}
                        style={styleBox}
                        disabled={!edit}
                        onChange={(e) => setUserData({ ...userData, elevator: e.target.value })} />
                    <small id="street-help">
                        מקסימום 30 תווים
                    </small>
                </BoxFiled>
                <BoxFiled>
                    <label htmlFor="city">עיר</label>
                    <InputText id="city"
                        aria-describedby="city-help"
                        value={userData.city}
                        style={styleBox}
                        disabled={!edit}
                        onChange={(e) => setUserData({ ...userData, city: e.target.value })} />
                    <small id="city-help">
                        מקסימום 20 תווים
                    </small>
                </BoxFiled>
                <BoxFiled>
                    <label htmlFor="email">אימייל</label>
                    <InputText id="email"
                        aria-describedby="email-help"
                        value={userData.email}
                        style={styleBox}
                        disabled={!edit}
                        type='email'
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                    {/* <small id="email-help">
                                   מקסימום 30 תווים
                                </small> */}
                </BoxFiled>
                <BoxFiled>
                    <label htmlFor="phone">פלאפון</label>
                    <InputText id="phone"
                        aria-describedby="phone-help"
                        value={userData.phone}
                        style={styleBox}
                        disabled={!edit}
                        type="number"
                        pattern="\d*"
                        onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
                    {/* <small id="phone-help">
                                   מקסימום 30 תווים
                                </small> */}
                </BoxFiled>
                <BoxFiled>
                    <label htmlFor="phone2">פלאפון נוסף</label>
                    <InputText id="phone2"
                        aria-describedby="phone2-help"
                        value={userData.phone2}
                        style={styleBox}
                        disabled={!edit}
                        type="number" pattern="\d*"
                        onChange={(e) => setUserData({ ...userData, phone2: e.target.value })} />
                    {/* <small id="phone2-help">
                                   מקסימום 30 תווים
                                </small> */}
                </BoxFiled>
                <Botton onClick={() => sendUserDate()}>
                    שמירה
                    <span className="material-symbols-rounded">done</span>
                </Botton>
            </ContainerUserDetails >

        </>
    )
}
export default FiledsNewUser