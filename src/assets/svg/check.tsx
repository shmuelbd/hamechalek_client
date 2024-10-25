import React from 'react'
import { motion } from "framer-motion";
import styled from "styled-components";
import { default_color } from '../../env';

export const Check = styled(motion.svg)`
margin: 0 5px;
&& path {
}
`;


const CheckSvg = () => {
    return (
        <Check
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            fill={default_color}>
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </Check>
    )
}

export default CheckSvg

