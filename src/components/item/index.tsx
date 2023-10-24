import React, { useState } from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';


const Container = styled(NavLink)`
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
const Img = styled(motion.img)`
width: 90%;
height: 150px;
background-color: #249e9e;
`;
const ItemName = styled(motion.div)`
width: 90%;
height: 10%;
font-size: 15px;
/* font-weight: 600; */
color: #1d1d1d;
`;
const ItemPrice = styled(motion.div)`
display: flex;
justify-content: flex-end;
align-items: flex-end;
width: 90%;
height: 15%;
font-size: 20px;
font-weight: 800;
color: #1d1d1d;
text-align: left;
`;
const Price_first = styled(motion.div)`
font-size: 30px;
font-weight: 900;
padding: 0 1px;
margin-bottom: -3px;
font-family: 'Rubik', sans-serif;
`;
const Price_second = styled(motion.div)`
font-size: 20px;
font-weight: 400;
`;


type Props = { item: any }

const Item = (props: Props) => {

    const price = props.item.sale_nis;
    const price_first = price.split(".")[0];
    const price_second = price.split(".")[1];
    return (

        <Container to={`/item/${props.item.item_id}`}
        >
            <Img />
            <ItemName>
                {props.item.item_name}
            </ItemName>
            <ItemPrice>
                <Price_second>
                    {price_second}.
                </Price_second>
                <Price_first>
                    {price_first}
                </Price_first>
                ₪
            </ItemPrice>
        </Container>

    )
}

export default Item
