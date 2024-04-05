import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { cartState } from '../../store/cart';
import Item from '../../components/item';
import { NavLink } from 'react-router-dom';


const Container = styled.div`
width: 100%;
/* min-height: 100vh; */
background-color: #fffffff8;
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
const BoxItem = styled(NavLink)`
display: flex;
width: 100%;
font-size: 20px;
font-weight: 900;
align-items: center;
justify-content: space-between;
height: 90px;
background-color: #ffffff;
/* border-radius: 8px; */
margin: 5px 10px;
padding: 0 10px;
border-bottom: 5px dotted #ebebeb;
user-select: none;
text-decoration: none;
`;
const Image = styled(motion.img) <{ src: string }>`
src: ${(props) => props.src} ;
border-radius: 50%;
object-fit: cover;
height: 90%;
border-radius: 20px;
vertical-align:middle;
padding-left: 5px;
`;
const Amount = styled(motion.div)`
/* display: flex;
align-items: center;
justify-content: center; */
width: 100%;
font-size: 15px;
font-weight: 500;
margin-top: 10px;
text-align: left;
/* background-color: aqua; */
`;
const ItemName = styled(motion.div)`
width: 40%;
font-size: 15px;
font-weight: 500;
`;
const BoxpriceAndAmount = styled(motion.div)`
display: flex;
flex-wrap: wrap;
height: 100%;
justify-content: end;
width: 70%;
`;

const ItemPrice = styled(motion.div)`
display: flex;
justify-content: flex-end;
align-items: flex-end;
/* width: 90%; */
/* height: 30px; */
font-size: 15px;
font-weight: 800;
color: #1d1d1d;
text-align: left;
/* margin-left: 7px; */
margin-bottom: 7px;
`;
const Price_first = styled(motion.div)`
font-size: 20px;
font-weight: 900;
padding: 0 1px;
margin-bottom: -1px;
font-family: 'Rubik', sans-serif;
`;
const Price_second = styled(motion.div)`
font-size: 15px;
font-weight: 400;
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
                            <BoxItem key={index} to={`/item/${Item.item_group_id}/${Item.id}`}>
                                <Image loading={"eager"} src={Item.picture_link} alt="Avatar" />
                                <ItemName>{Item.item_name}</ItemName>
                                {/* <Amount>{Number(Item.amount * Item.sale_nis).toFixed(2)} ₪</Amount> */}
                                <BoxpriceAndAmount>

                                    <Amount>{Item.amount} יחי'</Amount>
                                    <ItemPrice>
                                        <Price_second>
                                            {Number(Item.total).toFixed(2)?.split(".")[1]}.
                                        </Price_second>
                                        <Price_first>
                                            {Number(Item.total).toFixed(2)?.split(".")[0]}
                                        </Price_first>
                                        ₪
                                    </ItemPrice>
                                </BoxpriceAndAmount>
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