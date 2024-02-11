import { motion } from "framer-motion";
import styled from "styled-components";

export const Botton = styled(motion.div)`
width: 90%;
background-color: #7F5AFF;
height: 50px;
color: white;
font-size: 20px;
margin: 5px 20px;
margin-top: 20px;
border-radius: 12px;
display: flex;
align-items: center;
justify-content: center;
&& span {
    margin: 0 5px;
}
`;
