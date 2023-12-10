import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Proccesing from './Proccesing';
import { useParams } from 'react-router-dom';
import { userDetails } from '../../../../store/user';
import axios from 'axios';
import { GET_ORDER_DETAILS } from '../../../../env';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 100%;
user-select: none;
text-decoration: none;


`;
const Content = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: flex-start;
align-content: flex-start;
width: 90%;
background-color: #fafafa;
user-select: none;
text-decoration: none;
border-right: 2px dashed #5a5a5a;
border-left: 2px dashed #5a5a5a;
height: 100vh;
padding-top: 15px;
`;
const P = styled.div`
width: 100%;
height: min-content;
text-align: center;
font-size: 15px;
`;

type Props = {}

const OrderDetail = (props: Props) => {
    let { docid, typeid } = useParams();

    const [procces, setProcces] = useState<Boolean>(true)
    const [order, setOrder] = useState<any>(false)

    const customer_id = userDetails.value.customer_id;


    useEffect(() => {

        axios.post(GET_ORDER_DETAILS, {
            "customer_id": customer_id,
            "document_number": docid,
            "document_type": typeid
        }).then((res) => {

            setProcces(false);
            setOrder(res.data)
        }).catch((err) => {
            console.log(err);
        })

    }, [])


    return (
        <>
            {
                procces ? <Proccesing /> :
                    <Container>
                        <Content>
                            <P>{order.document_type}</P>
                            <P> {order.document_number}</P>
                            <P> {order.document_date}</P>
                            <P> {order.documnet_time}</P>
                            <P> {order.customer_name}</P>
                            <P> {order.customer_address}</P>
                            <P> {order.customer_city}</P>
                            <P> {order.customer_phone}</P>
                            <P>________________________</P>
                            <P></P>
                            <P></P>
                            <P></P>

                        </Content>
                    </Container>
                // <Item>
                //     <P>הזמנות אחרונות</P>

                //     {
                //         orders.map((item: any, index: number) => (
                //             <OrderItem item={item} key={index} />
                //         ))
                //     }
                // </Item>
                // <Container>OrderDetail</Container>
            }
        </>
    )
}

export default OrderDetail