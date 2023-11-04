import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Proccesing from './Proccesing';
import ItemDetails from './ItemDetails';
import { GET_ITEM, GET_ITEMS } from '../../env';
import { itemsCategoryState } from '../../store/items';

const Container = styled(motion.div)`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;
const DivImage = styled(motion.div)`
border-radius: 50%;
display: flex;
justify-content: center;
`;
const Image = styled(motion.img) <{ src: string }>`
background-color: bisque;
src: ${(props) => props.src} ;
border-radius: 50%;
object-fit: cover;
width: 90%;
border-radius: 20px;
`;
const ItemName = styled(motion.p)`
font-size: 20px;
font-weight: 600;
text-align: right;
width: 90%;
`;
const Buttons = styled(motion.div)`
display: flex;
justify-content: space-around;
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
    const [item, setItem] = useState<any>()
    const [procces, setProcces] = useState<Boolean>(true)
    console.log("item", item);

    let { itemid, catid } = useParams();

    const price = item?.sale_nis;
    const price_first = price?.split(".")[0];
    const price_second = price?.split(".")[1];

    useEffect(() => {
        if (itemsCategoryState.value.length < 1 || itemsCategoryState.value.filter((val: any) => val.item_id == itemid).length < 1) {

            axios.post(GET_ITEMS, {
                "item_group_id": catid
            }).then((res) => {
                itemsCategoryState.value = res.data;
                console.log("itemsCategoryState: ", itemsCategoryState.value);
                setItem(itemsCategoryState.value.filter((val: any) => val.item_id == itemid)[0]);
                setProcces(false);
            }).catch((err) => {
                console.log(err);
            })

        } else {
            setItem(itemsCategoryState.value.filter((val: any) => val.item_id == itemid)[0]);
            setProcces(false);
        }

    }, [])

    return (
        <Container>
            {/* <Img /> */}
            {
                procces ? <Proccesing /> :
                    // <Item item={item} key={`${index}`} />
                    <>
                        <DivImage>
                            <Image src={"https://wrz.co.il/wp-content/uploads/2021/05/IMG_20210506_234104.jpg"} alt="Avatar" />
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
                            <Button>
                                <span className="material-symbols-rounded">add</span>
                            </Button>
                            3
                            <Button>
                                <span className="material-symbols-rounded">remove</span>
                            </Button>
                        </Buttons>
                    </>
            }
        </Container>
    )
}

export default OneItem

// item_extended_description
// item_group_id
// item_name
// picture_link
// sale_nis