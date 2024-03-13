import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { cartState } from '../../store/cart';
import Item from '../../components/item';


const Container = styled.div`
width: 100%;
/* min-height: 100vh; */
background-color: #ffffff;
padding-bottom: 100px;
display: flex;
flex-wrap: wrap;
justify-content: center;
`;
;
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
const BoxItem = styled(motion.div)`
display: flex;
width: 100%;
font-size: 20px;
font-weight: 900;
align-items: center;
justify-content: space-between;
height: 90px;
background-color: #f7f7f7;
border-radius: 8px;
margin: 5px 10px;
`;
const Image = styled(motion.img) <{ src: string }>`
src: ${(props) => props.src} ;
border-radius: 50%;
object-fit: cover;
height: 90%;
border-radius: 20px;
vertical-align:middle;

`;
const Amount = styled(motion.div)`
display: flex;
align-items: center;
justify-content: center;
/* width: 10%; */
font-size: 18px;
font-weight: 500;
margin: 5px;
height: 100%;
/* background-color: #f0f0f0;
border-radius: 20px; */

`;
const ItemName = styled(motion.div)`
width: 40%;
font-size: 15px;
font-weight: 500;
`;

type Props = {}

const Cart = (props: Props) => {

    console.log("cartState.value: ", cartState.value);

    return (
        <Container>
            <Title>עגלת קניות</Title>
            {
                cartState.value.length > 0 ?
                    cartState.value.map((Item: any, index: any) => {
                        return (
                            <BoxItem key={index}>
                                <Amount>{Item.amount}</Amount>
                                <Image loading={"eager"} src={Item.picture_link} alt="Avatar" />
                                <ItemName>{Item.item_name}</ItemName>
                                <Amount>{Number(Item.amount * Item.sale_nis).toFixed(2)} ₪</Amount>
                            </BoxItem>
                        )
                    })
                    :
                    null
            }
        </Container>
    )
}

export default Cart