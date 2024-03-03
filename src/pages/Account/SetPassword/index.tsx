import React, { useState } from 'react'

import { motion } from "framer-motion";
import styled from "styled-components";
import { InputText } from 'primereact/inputtext';
import { Botton } from '../../../components/global-components/buttons/buttons';
import axios from 'axios';

export const BoxFiled = styled(motion.div)`
width: 90%;
min-height: 100px;
margin: 5px 0;
&& label {
font-weight: 900;
}
`;


type Props = {}

const SetPassword = (props: Props) => {

    const [userData, setUserData] = useState<any>({})
    const [edit, setEdit] = useState<any>(true)
    const [redirectToLogin, setRedirectToLogin] = useState<any>(false)

    const styleBox = {
        width: '100%',
        color: 'black',
        border: 'none',
        backgroundColor: "#f3f3f3ca",
        marginTop: '5px'

    }

    const dataToSend = { ...userData, "token": userDetails.value.token }

    const sendUserDate = () => {
        axios.post(CREATE_NEW_USER, dataToSend)
            .then((res) => {
                setEdit(!edit)
            }).catch((err) => {
                setRedirectToLogin(true)
            })
    }

    return (
        <div>

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
                שליחה
                <span className="material-symbols-rounded">done</span>
            </Botton>

        </div>
    )
}

export default SetPassword