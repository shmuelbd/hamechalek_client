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
width: 44%;
/* height: 250px; */
margin: 3%;
padding-top: 5px;
background-color: #fff1f0;
user-select: none;
text-decoration: none;
border-radius: 10px;
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
            setOrder(res.data.data.document_list)
        }).catch((err) => {
            console.log(err);
        })

    }, [])


    return (
        <>
            {
                procces ? <Proccesing /> :

                    // <Item>
                    //     <P>הזמנות אחרונות</P>

                    //     {
                    //         orders.map((item: any, index: number) => (
                    //             <OrderItem item={item} key={index} />
                    //         ))
                    //     }
                    // </Item>
                    1223
                // <Container>OrderDetail</Container>
            }
        </>
    )
}

export default OrderDetail