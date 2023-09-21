import React from 'react'
import styled from 'styled-components';
import SubCategory from '../SubCategory';
import multi_categories from '../../../data/multi_categories';
import { motion } from "framer-motion"

const Container = styled(motion.div)`
width: 100%;
display: flex;
flex-wrap: wrap;
height: 25 0px;
margin-bottom: 30px;
`;


const Header = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
height: 50px;
/* background-color: #019DDA; */
/* background-color: #7F5AFF; */
background-color: #ffffff;
/* -webkit-box-shadow: 0px -18px 20px -6px rgba(0,0,0,0.24); 
box-shadow: 0px -18px 20px -6px rgba(0,0,0,0.24); */
border-bottom: 1px solid #f3f3f3;
align-items: center;
padding: 0 10px;
justify-content: center;
position: relative;
border-radius: 20px 20px 0 0;
margin-bottom: 30px;
text-align: center;
`;
const Icon = styled.div<{ background: string }>`
width: 70px;
height: 70px;
aspect-ratio : 1 / 1;
background-color: aqua;
padding: 10px;
border-radius: 50%;
background-image: ${(props) => props.background} ;
background-size: cover;
background-position: center;
position: absolute;
top: -35px;
border: 1px solid #7F5AFF ;
`;
const Title = styled.div`
width: 100%;
font-size: 35px;
font-weight: 500;
color: #7F5AFF;
`;
const SubCatBox = styled.div`
width: 100%;
/* height: 150px; */
/* background-color: #ffffff; */
/* background-color: #f3f3f3; */
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
padding: 0 10px;
/* overflow-y: hidden; 
overflow-x: scroll; 
 &::-webkit-scrollbar {
    display: none;
 } */
`;


type Props = {
    index: string,
    item: any
}

const MainCategory = (props: Props) => {
    const items = multi_categories.filter(val => val.id == props.item.id)

    return (
        <Container
            initial={{
                opacity: 0,
                y: +1000

            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                // delay: (0.15 / 30)
                duration: 0.5,

            }}
        >
            <Header>
                {/* <Icon background={`url(${props.item.pic})`} /> */}
                <Title>
                    {props.item.name}
                </Title>
            </Header>
            <SubCatBox>
                {
                    items.map((subcat: any, indexsubcat: any) => (
                        <SubCategory item={subcat} index={indexsubcat} key={indexsubcat} />
                    ))
                }
            </SubCatBox>
        </Container>)
}

export default MainCategory