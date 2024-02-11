import { motion } from "framer-motion";
import styled from "styled-components";

export const BoxFiled = styled(motion.div)`
width: 90%;
min-height: 100px;
margin: 5px 0;
&& label {
font-weight: 900;
}
`;
