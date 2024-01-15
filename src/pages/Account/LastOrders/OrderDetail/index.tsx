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
/* border-right: 2px dashed #5a5a5a;
border-left: 2px dashed #5a5a5a; */
height: 100vh;
padding-top: 15px;
`;
const P = styled.div`
width: 100%;
height: min-content;
text-align: center;
font-size: 15px;
`;
const Table = styled.div`
width: 100%;
display: flex;
align-items: flex-start;
justify-content: space-between;
box-sizing: border-box;
padding: 4px;
`;

const RowName = styled.div`
width: 65%;
`;
const RowQuantity = styled.div`
width: 10%;
text-align: center;
`;
const RowTotal_line = styled.div`
width: 25%;
text-align: end;
font-weight: 600;
`;
const TableTotal = styled.div`
width: 100%;
display: flex;
align-items: flex-start;
justify-content: space-between;
box-sizing: border-box;
margin-top: 20px;
background-color: #d6d6d6;
padding: 10px;
`;
const PReceipt_totalTitle = styled.div`
width: 100%;
text-align: start;
`;
const PReceipt_total = styled.div`
width: 100%;
text-align: end;
font-weight: 600;
`;

type Props = {}

const OrderDetail = (props: Props) => {
    let { docid, typeid } = useParams();

    const [procces, setProcces] = useState<Boolean>(true)
    const [order, setOrder] = useState<any>(false)

    const customer_id = userDetails.value.token;


    useEffect(() => {

        axios.post(GET_ORDER_DETAILS, {
            "token": customer_id,
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
                            {
                                order.items.map((item: any, index: number) => (

                                    <Table key={index}>
                                        <RowName>{item.description}</RowName>
                                        <RowQuantity>{item.quantity}</RowQuantity>
                                        <RowTotal_line>{Number(item.total_line).toFixed(2)} ₪ </RowTotal_line>
                                    </Table>
                                ))
                            }
                            {/* <P> {order.documentLink}</P> */}
                            <P></P>
                            <P></P>
                            <TableTotal>
                                <PReceipt_totalTitle>סה"כ:</PReceipt_totalTitle>
                                {/* <PReceipt_total> {order.receipt_total}</PReceipt_total> */}
                                <PReceipt_total> {Number(order.receipt_total).toFixed(2)} ₪</PReceipt_total>
                            </TableTotal>
                        </Content>
                    </Container>
            }
        </>
    )
}

export default OrderDetail