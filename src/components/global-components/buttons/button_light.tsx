import { motion } from "framer-motion";
import styled from "styled-components";

export const ButtonLight = styled(motion.div)`
width: 90%;
background-color: #f7f7f7;
height: 50px;
color: #2b2b2b;
/* font-size: 12px; */
font-weight: 400;
font-size: 20px;
margin: 5px 20px;
margin-top: 20px;
/* padding: 0 10px; */
border-radius: 12px;
display: flex;
align-items: center;
justify-content: center;
/* border: 1px solid #7e5affa7; */
&& span {
    margin: 0 5px;
}
`;
