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
 background-color: #47c73c;
`;
const Container = styled(motion.div)`
display: flex;
width: 100%;
background-color: aqua;
 
`;


type Props = {}

const LastOrders = (props: Props) => {
    const [procces, setProcces] = useState<Boolean>(true)
    const [orders, setOrders] = useState<any>(false)

    const customer_id = userDetails.value.customer_id;


    useEffect(() => {

        axios.post(GET_ORDERS, {
            "customer_id": customer_id
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

                    <Item>הזמנות אחרונות
                        {
                            orders.map((item: any, index: number) => (
                                <OrderItem amount={item.amount} document_date={item.document_date} key={index}>css</OrderItem>
                            ))
                        }
                    </Item>

            }
        </>
    )
}

export default LastOrders


const OrderItem = (props: any) => {
    return (
        <Container>

            {
                props.amount
            }
            {
                props.document_date
            }
        </Container>
    )
}


