import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ItemDetails from './ItemDetails';
import { GET_ITEMS } from '../../env';
import { itemsCategoryState } from '../../store/items';
import { add, cartState, less } from '../../store/cart';
import { Proccesing } from './Proccesing';

const Container = styled(motion.div)`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;
const DivImage = styled(motion.div)`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
border-radius: 50%;
width: 80%;
border-radius: 20px;
/* min-height: 280px; */
/* overflow: hidden; */
`;
const Image = styled(motion.img) <{ src: string }>`
src: ${(props) => props.src} ;
border-radius: 50%;
object-fit: cover;
width: 90%;
border-radius: 20px;
vertical-align:middle;

`;
const ItemName = styled(motion.p)`
font-size: 20px;
font-weight: 600;
text-align: right;
width: 90%;
`;
const Buttons = styled(motion.div)`
display: flex;
justify-content: space-between;
align-items: center;
align-content:center;
width: 90%;
height: 100px;
font-size: 40px;
padding-top: 20px;
`;
const Button = styled(motion.div)`
display: flex;
width: 25%;
justify-content: center;
background-color: #33b4ff1d;
aspect-ratio: 1 / 1;
align-items: center;
border-radius: 50%;
    & span {
        font-size: 40px;
        color: #359cf7;
    }
`;
const ItemPrice = styled(motion.div)`
display: flex;
justify-content: flex-end;
align-items: flex-end;
width: 90%;
height: 30px;
font-size: 20px;
font-weight: 800;
color: #1d1d1d;
text-align: left;
margin-bottom: 15px;
`;
const Price_first = styled(motion.div)`
font-size: 40px;
font-weight: 900;
padding: 0 1px;
margin-bottom: -5px;
font-family: 'Rubik', sans-serif;
`;
const Price_second = styled(motion.div)`
font-size: 20px;
font-weight: 400;
`;


type ItemType = {
    item_group_id: String,
    item_name: String,
    picture_link: String,
    item_extended_description: String,
    sale_nis: String
}

const OneItem = () => {
    let { itemid, catid } = useParams();

    const [item, setItem] = useState<ItemType | any>()
    const [procces, setProcces] = useState<Boolean>(true)
    // console.log("item: ", item);

    const price = item?.sale_nis;
    const price_first = price?.split(".")[0];
    const price_second = price?.split(".")[1];
    console.log(" cartState.value", cartState.value);

    useEffect(() => {
        if (itemsCategoryState.value.length < 1 || itemsCategoryState.value.filter((val: any) => val.item_id == itemid).length < 1) {

            axios.post(GET_ITEMS, {
                "item_group_id": catid
            }).then((res) => {
                itemsCategoryState.value = res.data;
                // console.log("itemsCategoryState: ", itemsCategoryState.value);
            }).catch((err) => {
                console.log(err);
            })
        }
        setItem(itemsCategoryState.value.filter((val: any) => val.item_id == itemid)[0]);
        setProcces(false);

    }, [])


    return (
        <Container>
            {/* <Img /> */}
            {
                procces ? <Proccesing /> :
                    // <Item item={item} key={`${index}`} />
                    <>
                        <DivImage>
                            <Image loading={"eager"} src={item.picture_link} alt="Avatar" />
                        </DivImage>
                        <ItemName>{item.item_name}</ItemName>

                        <ItemPrice>
                            <Price_second>
                                {price_second}.
                            </Price_second>
                            <Price_first>
                                {price_first}
                            </Price_first>
                            ₪
                        </ItemPrice>

                        <ItemDetails item={item} />

                        <Buttons>
                            <Button onClick={() => add(itemid, item)}>
                                <span className="material-symbols-rounded">add</span>
                            </Button>

                            {
                                cartState.value.items.filter((val: any) => val.id == itemid)[0] ? cartState.value.items.filter((val: any) => val.id == itemid)[0].amount
                                    :
                                    0
                            }
                            <Button onClick={() => less(itemid)}>
                                <span className="material-symbols-rounded">remove</span>
                            </Button>
                        </Buttons>
                    </>
            }
        </Container>
    )
}

export default OneItem

