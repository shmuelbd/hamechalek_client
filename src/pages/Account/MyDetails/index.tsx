import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { userDetails } from '../../../store/user';
import { GET_USER_DETAILS } from '../../../env';
import { ProgressBar } from 'primereact/progressbar';
import { InputText } from 'primereact/inputtext';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type Props = {}


const MyDetails = (props: Props) => {

    const [userData, setUserData] = useState<any>()

    useEffect(() => {
        if (userDetails.value.token) {
            axios.post(GET_USER_DETAILS, {
                "token": userDetails.value.token
            }).then((res) => {
                setUserData(res.data)
            }).catch((err) => {
                console.log(err);
            })

        }

    }, [])

    return (
        <div>
            {
                userData == undefined ?
                    <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
                    :
                    <UserDetails userData={userData} />

            }

        </div>
    )
}

export default MyDetails


const ContainerUserDetails = styled(motion.div)`
display: flex;
flex-wrap: wrap;
width: 100%;
padding: 5px;
margin: 0;
margin-top: 10px;
background-color: #f5f5f5;
`;




const UserDetails = (props: any) => {
    const [userData, setUserData] = useState<any>(props.userData)
    const [edit, setEdit] = useState<any>(false)



    return (
        <>
            {
                !edit
                    ?
                    <>
                        <ContainerUserDetails>
                            132
                        </ContainerUserDetails>



                    </>

                    :
                    <>
                        <label htmlFor="first_name">שם פרטי</label>
                        <InputText id="first_name" aria-describedby="first_name-help" value={userData.first_name} style={{ width: '100%' }} />
                        <small id="first_name-help">
                            מקסימום 20 תווים
                        </small>
                        <br />
                        <label htmlFor="last_name">שם משפחה</label>
                        <InputText id="last_name" aria-describedby="last_name-help" value={userData.last_name} style={{ width: '100%' }} />
                        <small id="last_name-help">
                            מקסימום 30 תווים
                        </small>
                        <br />
                        <label htmlFor="email">אימייל</label>
                        <InputText id="email" aria-describedby="email-help" value={userData.email} style={{ width: '100%' }} />
                        {/* <small id="email-help">
                                   מקסימום 30 תווים
                               </small> */}
                        <br />
                        <label htmlFor="phone">פלאפון</label>
                        <InputText id="phone" aria-describedby="phone-help" value={userData.phone} style={{ width: '100%' }} />
                        {/* <small id="phone-help">
                                   מקסימום 30 תווים
                               </small> */}
                        <br />
                        <label htmlFor="phone2">פלאפון נוסף</label>
                        <InputText id="phone2" aria-describedby="phone2-help" value={userData.phone2} style={{ width: '100%' }} />
                        {/* <small id="phone2-help">
                                   מקסימום 30 תווים
                               </small> */}
                        <br />
                        <label htmlFor="street">רחוב</label>
                        <InputText id="street" aria-describedby="street-help" value={userData.street} style={{ width: '100%' }} />
                        <small id="street-help">
                            מקסימום 30 תווים
                        </small>
                        <br />
                        <label htmlFor="city">עיר</label>
                        <InputText id="city" aria-describedby="city-help" value={userData.city} style={{ width: '100%' }} />
                        <small id="city-help">
                            מקסימום 20 תווים
                        </small>
                        <br />
                    </>

            }
        </>
    )
}