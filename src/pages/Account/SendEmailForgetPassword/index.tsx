import React, { useState } from 'react'

import { motion } from "framer-motion";
import styled from "styled-components";
import { InputText } from 'primereact/inputtext';
import { Botton } from '../../../components/global-components/buttons/buttons';
import axios from 'axios';
import { CREATE_NEW_USER_FORGET_PASSWORD, GET_USER_DETAILS_UPDATE } from '../../../env';
import { useParams } from 'react-router-dom';
import { userDetails } from '../../../store/user';
import { Player } from '@lottiefiles/react-lottie-player';
import { progressBar } from '../../../store/appState';
const ICON = require('./sent_email_anumation.json');

export const BoxFiled = styled(motion.div)`
width: 90%;
min-height: 100px;
margin: 5px 0;
&& label {
font-weight: 900;
}
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
const ShowPass = styled(motion.div)`
padding-top: 5px;
color: #7F5AFF;

`;
const Title = styled(motion.div)`
width: 100%;
font-size: 20px;
font-weight: 900;
text-align: center;
height: 80px;
`;
const P = styled(motion.div)`
width: 80%;
font-size: 20px;
font-weight: 600;
text-align: center;
height: 80px;
`;
const IconAnimation = styled(motion.div)`
padding-top: 50px;
width: 100%;
height: 250px;
`;

type Props = {}

const SendEmailForgetPassword = (props: Props) => {

    const [userData, setUserData] = useState<any>({})
    const [edit, setEdit] = useState<any>(true)
    const [redirectToLogin, setRedirectToLogin] = useState<any>(false)
    const [showPass, setShowPass] = useState<any>(false)



    const styleBox = {
        width: '100%',
        color: 'black',
        border: 'none',
        backgroundColor: "#f3f3f3ca",
        marginTop: '5px'

    }

    const dataToSend = { ...userData }

    const sendUserDate = () => {
        progressBar.value = true;
        axios.post(CREATE_NEW_USER_FORGET_PASSWORD, dataToSend)
            .then((res) => {
                setEdit(!edit)
                progressBar.value = false;

            }).catch((err) => {
                setRedirectToLogin(true)
                progressBar.value = false;

            })
    }

    return (
        <>
            {
                edit ?

                    <div>
                        <ContainerUserDetails>
                            <Title>אימות משתמש</Title>

                            <BoxFiled>
                                <label htmlFor="phone2"> כתובת מייל לאימות </label>
                                <InputText id="phone2"
                                    aria-describedby="phone2-help"
                                    value={userData.password}
                                    style={styleBox}
                                    disabled={!edit}
                                    type="email"
                                    onChange={(e) => setUserData({ ...userData, mail: e.target.value })} />
                            </BoxFiled>

                            <Botton onClick={() => sendUserDate()}>
                                שליחה
                                <span className="material-symbols-rounded">done</span>
                            </Botton>
                        </ContainerUserDetails>

                    </div>
                    :
                    <ContainerUserDetails>
                        <IconAnimation>
                            <Player
                                autoplay
                                speed={1.5}
                                loop={false}
                                src={ICON}
                                style={{ height: '150px', width: '200px' }}
                                keepLastFrame
                            >
                            </Player>
                        </IconAnimation>
                        <P>
                            מחכה לכם בתיבת המייל הודעה לאימות החשבון שלכם
                        </P>
                    </ContainerUserDetails>

            }
        </>
    )
}

export default SendEmailForgetPassword