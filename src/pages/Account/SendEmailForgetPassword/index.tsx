import React, { useState } from 'react'

import { motion } from "framer-motion";
import styled from "styled-components";
import { InputText } from 'primereact/inputtext';
import { Botton } from '../../../components/global-components/buttons/buttons';
import axios from 'axios';
import { GET_USER_DETAILS_UPDATE } from '../../../env';
import { useParams } from 'react-router-dom';
import { userDetails } from '../../../store/user';

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
type Props = {}

const SendEmailForgetPassword = (props: Props) => {

    const [userData, setUserData] = useState<any>({})
    const [edit, setEdit] = useState<any>(true)
    const [redirectToLogin, setRedirectToLogin] = useState<any>(false)
    const [showPass, setShowPass] = useState<any>(false)

    let { token, newUser } = useParams();



    const styleBox = {
        width: '100%',
        color: 'black',
        border: 'none',
        backgroundColor: "#f3f3f3ca",
        marginTop: '5px'

    }

    const dataToSend = { ...userData, "token": token }

    const sendUserDate = () => {
        axios.post(GET_USER_DETAILS_UPDATE, dataToSend)
            .then((res) => {
                setEdit(!edit)
            }).catch((err) => {
                setRedirectToLogin(true)
            })
    }

    return (
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
                        onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                </BoxFiled>

                <Botton onClick={() => sendUserDate()}>
                    שליחה
                    <span className="material-symbols-rounded">done</span>
                </Botton>
            </ContainerUserDetails>

        </div>
    )
}

export default SendEmailForgetPassword