import React from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion"


const Container = styled(motion.div)`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: flex-start;
width: 90%;
font-size: 14px;
`;
const Box = styled(motion.div) <{ background: string }>`
display: flex;
align-items: center;
justify-items: flex-start;
background-color: ${(props) => props.background} ;
height: 30px;
padding: 0 5px 0 14px;
border-radius: 40px;
margin: 4px;
color: #ffffff;
    & span{
        margin: 0 2px;
        font-size: 14px;

    }
`;


type Props = {
    item: ItemType
}
type ItemType = {
    item_group_id: String,
    item_name: String,
    picture_link: String,
    item_extended_description: String,
    sale_nis: String
}

const ItemDetails = (props: Props) => {
    return (
        <Container>

            <Box background="#109e03">
                <span className="material-symbols-rounded">check_circle</span>
                <p>המוצר במלאי</p>
            </Box>
            <Box background="#98a111">
                <span className="material-symbols-rounded">package_2</span>
                <p>12 במארז</p>
            </Box>
            <Box background="#df3838">
                <span className="material-symbols-rounded">sell</span>
                <p>3 במבצע</p>
            </Box>

        </Container>
    )
}

export default ItemDetails