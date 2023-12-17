import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { userDetails } from '../../store/user';

const Container = styled(motion.div)`
display: flex;
flex-wrap: wrap;
width: 100%;

`;
const Title = styled(motion.div)`
display: flex;
flex-wrap: wrap;
width: 100%;
font-size: 20px;
font-weight: 900;
align-items: center;
justify-content: center;
height: 80px;
`;
const Item = styled(NavLink)`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
font-size: 18px;
width: 100%;
background-color: #f7f7f7;
padding: 10px;
margin: 5px 15px;
text-decoration: none;
cursor: pointer;
user-select: none;
-webkit-user-select: none; /* Safari */
-ms-user-select: none; /* IE 10 and IE 11 */
user-select: none; /* Standard syntax */
-webkit-tap-highlight-color: transparent;
border-radius: 5px;
height: 80px;
color: #3a3a3a;
`;
type Props = {}

const Account = (props: Props) => {
    const token = userDetails.value.token;



    return (
        <Container>
            <Title>הפרופיל שלי</Title>
            {
                token ?
                    <>
                        <Item to={"lastorders"}>
                            הזמנות אחרונות
                            <span className="material-symbols-rounded">receipt</span>

                        </Item>
                        <Item to={"lastorders"}>
                            הפרטים שלי
                            <span className="material-symbols-rounded">manage_accounts</span>
                        </Item>
                        <Item to={"lastorders"}>
                            כרטיסי אשראי
                            <span className="material-symbols-rounded">credit_card</span>
                        </Item>
                        <Item to={"lastorders"}>
                            יציאה
                            <span className="material-symbols-rounded">logout</span>
                        </Item>
                    </>
                    :
                    <Item to={"login"}>
                        כניסה / הרשמה
                        <span className="material-symbols-rounded">login</span>
                    </Item>
            }
        </Container>
    )
}

export default Account