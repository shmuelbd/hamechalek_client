import React from 'react'
import { motion } from "framer-motion";
import styled from "styled-components";
import { default_color } from '../../env';

export const EditSvg = styled(motion.svg)`
margin: 0 5px;
&& path {
}
`;


const EditSvgIcon = () => {
    return (
        <EditSvg
            height="6vw"
            viewBox="0 -960 960 960"
            width="6vw"
            fill={default_color}>
            <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
        </EditSvg>
    )
}

export default EditSvgIcon

