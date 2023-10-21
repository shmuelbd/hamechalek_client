import React from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion"

const Container = styled(motion.div)`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;
const Img = styled(motion.img)`
background-color: bisque;
width: 90%;
height: 350px;
`;

type Props = {}

const OneItem = (props: Props) => {
    return (
        <Container>
            <Img />
        </Container>
    )
}

export default OneItem