import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Item from '../../components/item';
import itemsLocal from '../../data/items';
import { GetItems } from '../../functions/getItems';
import axios from 'axios';
import { useOutletContext, useParams } from 'react-router-dom';
import Proccesing from './Proccesing';
import { GET_ITEMS } from '../../env';
import OneItemPopUp from './OneItemPopUp';
import { AnimatePresence } from 'framer-motion';
import { itemsCategoryState } from '../../store/items';
import { computed } from "@preact/signals";


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
    const [procces, setProcces] = useState<Boolean>(true)
    const [popUp, setPopUp] = useState<Boolean>(false)
    let { catid } = useParams();

    // let items = computed(() => (itemsCategoryState.value.length < 1));

    useEffect(() => {
        if (itemsCategoryState.value.length < 1 || itemsCategoryState.value[0].item_group_id != catid) {

            axios.post(GET_ITEMS, {
                "item_group_id": catid
            }).then((res) => {
                itemsCategoryState.value = res.data;
                console.log("itemsCategoryState: ", itemsCategoryState.value);
                setProcces(false);
            }).catch((err) => {
                console.log(err);
            })

        } else {
            setProcces(false);
        }

    }, [])



    return (
        <Container>
            {
                procces ? <Proccesing /> :
                    itemsCategoryState.value.map((item: any, index: Number) => (
                        <Item item={item} key={`${index}`}
                        //  setPopUp={setPopUp} 
                        />
                    ))
            }
            {/* <AnimatePresence>
                {popUp ? <OneItemPopUp setPopUp={setPopUp} /> : " "}
            </AnimatePresence> */}
        </Container>
    )
}

export default Items
