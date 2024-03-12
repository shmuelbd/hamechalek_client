import React from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion"
import { ItemType } from '../../../types/item';


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


const ItemDetails = (props: Props) => {
    return (
        <Container>
            {
                props.item.in_stock ?
                    <Box background="#109e03">
                        <span className="material-symbols-rounded">check_circle</span>
                        <p>המוצר במלאי</p>
                    </Box>
                    :
                    <Box background="#ff2e2e">
                        <span className="material-symbols-rounded">cancel</span>
                        <p>חסר במלאי</p>
                    </Box>
            }
            {
                props.item.inPackage ?
                    <Box background="#0b6bb9">
                        <span className="material-symbols-rounded">package_2</span>
                        <p>{props.item.inPackage} במארז</p>
                    </Box>
                    :
                    null
            }
            {
                props.item.sale ?
                    <Box background="#facf0f">
                        <span className="material-symbols-rounded">sell</span>
                        <p>{`${props.item.sale}`} במבצע</p>
                    </Box>
                    :
                    null
            }

        </Container>
    )
}

export default ItemDetails