import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Item = styled(motion.div)`
display: flex;

 
`;


type Props = {}

const LastOrders = (props: Props) => {
    return (
        <Item>הזמנות אחרונות

        </Item>
    )
}

export default LastOrders