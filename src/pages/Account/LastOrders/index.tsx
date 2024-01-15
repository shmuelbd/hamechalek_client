import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GET_ORDERS } from '../../../env';
import { userDetails } from '../../../store/user';
import axios from 'axios';
import Proccesing from './Proccesing';


const Item = styled(motion.div)`
display: flex;
flex-wrap: wrap;
width: 100%;
padding: 10px;
`;

const P = styled(motion.div)`
width: 100%;
font-size: 20px;
text-align: center;
margin-bottom: 10px;
`;


type Props = {}

const LastOrders = (props: Props) => {
    const [procces, setProcces] = useState<Boolean>(true)
    const [orders, setOrders] = useState<any>(false)

    const customer_id = userDetails.value.token;


    useEffect(() => {

        axios.post(GET_ORDERS, {
            "token": customer_id
        }).then((res) => {

            setProcces(false);
            setOrders(res.data.data.document_list)
        }).catch((err) => {
            console.log(err);
        })

    }, [])


    return (
        <>
            {
                procces ? <Proccesing /> :

                    <Item>
                        <P>הזמנות אחרונות</P>

                        {
                            orders.map((item: any, index: number) => (
                                <OrderItem item={item} key={index} />
                            ))
                        }
                    </Item>

            }
        </>
    )
}

export default LastOrders

const Container = styled(NavLink)`
display: flex;
width: 100%;
align-items: center;
background-color: #f3f3f3;
padding: 5px;
margin: 5px 0;
border-radius: 5px;
user-select: none;
text-decoration: none;
color: #363636;
& span{
    font-size: 45px;
    font-weight: 250;
    color: #7F5AFF;
    }

`;

const InfoBox = styled(motion.div)`
display: flex;
flex-wrap: wrap;
height: 100%;
width: 100%;
align-items: center;
justify-content: space-between;
font-size: 13px;
text-align: right;
margin-right: 10px;

`;
const Title = styled(motion.div)`
width: 100%;
font-size: 13px;
text-align: right;
font-weight: 600;
`;
const Price = styled(motion.div)`
font-size: 13px;
text-align: right;
margin-left: 10px;
`;


const OrderItem = (props: any) => {
    return (
        <Container to={`${props.item.document_number}/${props.item.document_type}`} >
            <span className="material-symbols-rounded">receipt</span>
            <InfoBox>

                <Title>
                    {
                        props.item.document_type_name
                    }
                </Title>
                {
                    props.item.document_date
                }
                {`  `}
                <Price>

                    {
                        Number(props.item.amount).toFixed(2)
                    }
                    {` ₪ `}
                </Price>
            </InfoBox>
        </Container>
    )
}


