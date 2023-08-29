import React from 'react'
import styled from 'styled-components';
import categories from '../../data/categories';
import MainCategory from './MainCategory';
import { motion } from "framer-motion"


const Container = styled.div`
width: 100%;
margin-top: 40px;
`;


type Props = {}

const Categories = (props: Props) => {
    return (
        <Container>
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