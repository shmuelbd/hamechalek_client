import React from 'react'
import { motion } from "framer-motion";
import styled from "styled-components";
import { default_color } from '../../env';

export const Orders = styled(motion.svg)`
margin: 0 5px;
&& path {
}
`;


const OrdersSvg = () => {
    return (
        <Orders
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            fill={default_color}>
            <path d="M160-160v-516L82-846l72-34 94 202h464l94-202 72 34-78 170v516H160Zm240-280h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM240-240h480v-358H240v358Zm0 0v-358 358Z" />
        </Orders>
    )
}

export default OrdersSvg

