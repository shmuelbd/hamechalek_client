import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { userDetails } from '../../../store/user';
import { GET_USER_DETAILS, GET_USER_DETAILS_UPDATE } from '../../../env';
import { ProgressBar } from 'primereact/progressbar';
import { InputText } from 'primereact/inputtext';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Botton } from '../../../components/global-components/buttons/buttons';
import { BoxFiled } from '../../../components/global-components/inputs/inputs';
import ProgressBarCustom from '../../../components/global-components/progressBar/progressBar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { progressBar } from '../../../store/appState';

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
const MyDetails = (props: Props) => {

    const [userData, setUserData] = useState<any>(dataForFromEmail)

    const [searchParams] = useSearchParams();
    const tokenFromQuery = searchParams.get('token');

    useEffect(() => {
        //התנאי הזה הוא בשביל שלא יעשה קריאה ללא שיש טוקן 
        if (tokenFromQuery != null || userDetails.value.token) {
            progressBar.value = true;

            // setUserData(dataForFromEmail)
            axios.post(GET_USER_DETAILS, {
                "token": tokenFromQuery != null ? tokenFromQuery : userDetails.value.token
            }).then((res) => {
                progressBar.value = false;
                setUserData(res.data)
            }).catch((err) => {
                progressBar.value = false;
                setUserData(dataForFromEmail)
            })

        }

        //לצורך ביצוע קריא מיד כשיש טוקן 
    }, [userDetails.value.token])

    return (
        <div>
            {
                userData == undefined && tokenFromQuery == null ?
                    <ProgressBarCustom />
                    :
                    <UserDetails userData={userData} setUserData={setUserData} edit={tokenFromQuery ? true : false} token={tokenFromQuery ? tokenFromQuery : userDetails.value.token} />
            }
        </div>
    )
}

export default MyDetails

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

const ContainerUserDetailsNotEdit = styled(motion.div)`
display: flex;
flex-wrap: wrap;
width: 90%;
margin: 5px 20px;
padding: 10px;
background-color: #f3f3f3ca;
justify-content: center;
border-radius: 12px;
`;
const BoxFiledNotEdit = styled(motion.div)`
width: 95%;
min-height: 30px;
display: flex;
flex-wrap: wrap;
align-items: center;
`;
const P = styled(motion.div)`
font-weight: 900;
margin-left:5px ;
`;
const ShowPass = styled(motion.div)`
padding-top: 5px;
color: #7F5AFF;

`;



const UserDetails = (props: any) => {
    const [edit, setEdit] = useState<any>(props.edit)
    const [showPass, setShowPass] = useState<any>(false)
    const navigate = useNavigate();

    const styleBox = {
        width: '100%',
        color: 'black',
        border: 'none',
        backgroundColor: "#f3f3f3ca",
        marginTop: '5px'

    }

    const dataToSend = { ...props.userData, "token": props.token }

    const sendUserDate = () => {
        progressBar.value = true;
        axios.post(GET_USER_DETAILS_UPDATE, dataToSend)
            .then((res) => {
                setEdit(!edit)
                console.log(userDetails.value.token);
                if (!userDetails.value.token)
                    navigate("/myaccount");
                progressBar.value = false;
            }).catch((err) => {
                console.log(err);
                progressBar.value = false;
            })
    }

    return (
        <>
            <Title>הפרטים שלי</Title>

            {
                !edit
                    ?
                    <>

                        <ContainerUserDetailsNotEdit>
                            <BoxFiledNotEdit><P>שם פרטי:</P>{props.userData.first_name}</BoxFiledNotEdit>
                            <BoxFiledNotEdit><P>משפחה:</P>{props.userData.last_name}</BoxFiledNotEdit>
                            <BoxFiledNotEdit><P>רחוב:</P>{props.userData.street}</BoxFiledNotEdit>
                            <BoxFiledNotEdit><P>דירה:</P>{props.userData.apartment}</BoxFiledNotEdit>
                            <BoxFiledNotEdit><P>קומה:</P>{props.userData.floor}</BoxFiledNotEdit>
                            <BoxFiledNotEdit><P>מעלית:</P>{props.userData.elevator}</BoxFiledNotEdit>
                            <BoxFiledNotEdit><P>עיר:</P>{props.userData.city}</BoxFiledNotEdit>
                            <BoxFiledNotEdit><P>אימייל:</P>{props.userData.email}</BoxFiledNotEdit>
                            <BoxFiledNotEdit><P>פלאפון:</P>{props.userData.phone}</BoxFiledNotEdit>
                            <BoxFiledNotEdit><P>פלאפון נוסף:</P>{props.userData.phone2}</BoxFiledNotEdit>
                        </ContainerUserDetailsNotEdit>
                        <Botton onClick={() => setEdit(!edit)}>
                            עריכה
                            <span className="material-symbols-rounded">edit</span>
                        </Botton>
                    </>
                    :
                    <>

                        <ContainerUserDetails>
                            <BoxFiled>
                                <label htmlFor="first_name">שם פרטי</label>
                                <InputText id="first_name"
                                    aria-describedby="first_name-help"
                                    value={props.userData.first_name}
                                    style={styleBox}
                                    disabled={!edit}
                                    onChange={(e) => props.setUserData({ ...props.userData, first_name: e.target.value })} />
                                <small id="first_name-help">
                                    מקסימום 20 תווים
                                </small>
                            </BoxFiled>
                            <BoxFiled>
                                <label htmlFor="last_name">שם משפחה</label>
                                <InputText id="last_name"
                                    aria-describedby="last_name-help"
                                    value={props.userData.last_name}
                                    style={styleBox}
                                    disabled={!edit}
                                    onChange={(e) => props.setUserData({ ...props.userData, last_name: e.target.value })} />
                                <small id="last_name-help">
                                    מקסימום 30 תווים
                                </small>
                            </BoxFiled>
                            <BoxFiled>
                                <label htmlFor="street">רחוב</label>
                                <InputText id="street"
                                    aria-describedby="street-help"
                                    value={props.userData.street}
                                    style={styleBox}
                                    disabled={!edit}
                                    onChange={(e) => props.setUserData({ ...props.userData, street: e.target.value })} />
                                <small id="street-help">
                                    מקסימום 30 תווים
                                </small>
                            </BoxFiled>
                            <BoxFiled>
                                <label htmlFor="street">דירה</label>
                                <InputText id="street"
                                    aria-describedby="street-help"
                                    value={props.userData.apartment}
                                    style={styleBox}
                                    disabled={!edit}
                                    type="number"
                                    onChange={(e) => props.setUserData({ ...props.userData, apartment: e.target.value })} />
                                <small id="street-help">
                                    מקסימום 30 תווים
                                </small>
                            </BoxFiled>
                            <BoxFiled>
                                <label htmlFor="street">קומה</label>
                                <InputText id="street"
                                    aria-describedby="street-help"
                                    value={props.userData.floor}
                                    style={styleBox}
                                    disabled={!edit}
                                    type="number"
                                    onChange={(e) => props.setUserData({ ...props.userData, floor: e.target.value })} />
                                <small id="street-help">
                                    מקסימום 30 תווים
                                </small>
                            </BoxFiled>
                            <BoxFiled>
                                <label htmlFor="street">מעלית</label>
                                <InputText id="street"
                                    aria-describedby="street-help"
                                    value={props.userData.elevator}
                                    style={styleBox}
                                    disabled={!edit}
                                    onChange={(e) => props.setUserData({ ...props.userData, elevator: e.target.value })} />
                                <small id="street-help">
                                    מקסימום 30 תווים
                                </small>
                            </BoxFiled>
                            <BoxFiled>
                                <label htmlFor="city">עיר</label>
                                <InputText id="city"
                                    aria-describedby="city-help"
                                    value={props.userData.city}
                                    style={styleBox}
                                    disabled={!edit}
                                    onChange={(e) => props.setUserData({ ...props.userData, city: e.target.value })} />
                                <small id="city-help">
                                    מקסימום 20 תווים
                                </small>
                            </BoxFiled>
                            {/* <BoxFiled>
                            <label htmlFor="email">אימייל</label>
                            <InputText id="email"
                                aria-describedby="email-help"
                                value={userData.email}
                                style={styleBox}
                                disabled={!edit}
                                type='email'
                                onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                            <small id="email-help">
                                   מקסימום 30 תווים
                                </small>
                        </BoxFiled> */}
                            <BoxFiled>
                                <label htmlFor="phone">פלאפון</label>
                                <InputText id="phone"
                                    aria-describedby="phone-help"
                                    value={props.userData.phone}
                                    style={styleBox}
                                    disabled={!edit}
                                    type="number"
                                    pattern="\d*"
                                    onChange={(e) => props.setUserData({ ...props.userData, phone: e.target.value })} />
                                {/* <small id="phone-help">
                                   מקסימום 30 תווים
                                </small> */}
                            </BoxFiled>
                            <BoxFiled>
                                <label htmlFor="phone2">פלאפון נוסף</label>
                                <InputText id="phone2"
                                    aria-describedby="phone2-help"
                                    value={props.userData.phone2}
                                    style={styleBox}
                                    disabled={!edit}
                                    type="number" pattern="\d*"
                                    onChange={(e) => props.setUserData({ ...props.userData, phone2: e.target.value })} />
                                {/* <small id="phone2-help">
                                   מקסימום 30 תווים
                                </small> */}
                            </BoxFiled>
                            <BoxFiled>
                                <label htmlFor="password">סיסמה חדשה</label>
                                <InputText id="password"
                                    aria-describedby="phone2-help"
                                    value={props.userData.password}
                                    style={styleBox}
                                    disabled={!edit}
                                    type={showPass ? "text" : "password"}
                                    onChange={(e) => props.setUserData({ ...props.userData, password: e.target.value })} />
                                <ShowPass onClick={() => setShowPass(!showPass)}>הציגו את הסיסמה</ShowPass>
                            </BoxFiled>

                            {/* <BoxFiled>
                            <label htmlFor="phone2">הקלידו שוב את הסיסמה</label>
                            <InputText id="phone2"
                                aria-describedby="phone2-help"
                                value={userData.password2}
                                style={styleBox}
                                disabled={!edit}
                                type={showPass ? "text" : "password"}
                                onChange={(e) => setUserData({ ...userData, password2: e.target.value })} />
                            <ShowPass onClick={() => setShowPass(!showPass)}>הציגו את הסיסמה</ShowPass>

                        </BoxFiled> */}
                            <Botton onClick={() => sendUserDate()}>
                                שמירה
                                <span className="material-symbols-rounded">done</span>
                            </Botton>
                        </ContainerUserDetails >
                    </>
            }
        </>
    )
}