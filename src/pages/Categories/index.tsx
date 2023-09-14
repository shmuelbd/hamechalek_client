import React from 'react'
import styled from 'styled-components';
import categories from '../../data/categories';
import MainCategory from './MainCategory';
import { motion } from "framer-motion"
import s from '../../assets/bunner1.jpg';



const Container = styled.div`
width: 100%;
/* margin-top: 20px; */
width: 100%;
text-align: center;
`;

const MainTitle = styled.div`
font-size: 25px;
font-weight: 800;
`
const Ad = styled.img`
background-image: url(${s}) ;
background-size:cover;
background-position: center;
background-repeat: no-repeat;
height: 120px;
width: 95%;
margin-top: 20px;
margin-bottom: 17px;
border-radius: 12px;
margin-left: 1%;
margin-right: 1%;
`;
;

type Props = {}

const Categories = (props: Props) => {
    return (
        <Container>
            {/* <MainTitle>קטגוריות מוצרים</MainTitle> */}
            <Ad />
            {
                categories.map((item: any, index: any) => {
                    return (
                        <MainCategory
                            index={index}
                            item={item}
                            key={index}
                        />
                    )
                })

            }

        </Container>
    )
}

export default Categories