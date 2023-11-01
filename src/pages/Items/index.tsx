import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Item from '../../components/item';
import itemsLocal from '../../data/items';
import { GetItems } from '../../functions/getItems';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Proccesing from './Proccesing';
import { GET_ITEMS } from '../../env';


const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: flex-start;
width: 100%;
padding-bottom: 90px;
`;



type ItemsType = {
    item_id: String,
    item_name: String,
    item_group_id: String,
    item_name_en: String,
}
type Props = {}

const Items = (props: Props) => {
    const [items, setItems] = useState<ItemsType | any>(null)
    let { catid } = useParams();

    useEffect(() => {
        axios.post("https://apiservice.xn--8dbgpg1c.xn--4dbrk0ce/web-shop/items", {
            "item_group_id": catid
        }).then((res) => {
            setItems(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })

    }, [])

    return (
        <Container>
            {
                items === null ? <Proccesing /> :
                    items.map((item: any, index: Number) => (
                        <Item item={item} key={`${index}`} />

                    ))
            }

        </Container>
    )
}

export default Items
