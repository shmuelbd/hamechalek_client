import React, { useState } from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';


const Container = styled(NavLink)`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 44%;
height: 250px;
margin: 3%;
padding-top: 5px;
background-color: #fff1f0;
user-select: none;
text-decoration: none;
border-radius: 10px;
`;
const Img = styled(motion.img)`
width: 90%;
height: 70%;
background-color: #249e9e;
`;
const ItemName = styled(motion.div)`
width: 90%;
height: 10%;
font-size: 15px;
/* font-weight: 600; */
color: #1d1d1d;
`;
const ItemPrice = styled(motion.div)`
width: 90%;
height: 15%;
font-size: 20px;
font-weight: 800;
color: #1d1d1d;
text-align: left;
`;
const PopUpContainer = styled(motion.div)`
width: 100%;
height: 100%;
background-color: #8f8f8f57;
bottom: 0;
position: fixed;
left: 0;
z-index: 101;
`;
const PopUpItem = styled(motion.div)`
width: 100%;
height: 70%;
background-color: #ffffff;
bottom: 0;
position: fixed;
left: 0;
border-radius: 12px 12px 0 0;
`;



type Props = { item: any }

const Item = (props: Props) => {
    const [open, setopen] = useState(false)

    return (

        <Container to={`${props.item.id}`}
        // onClick={() => setopen(state => !state)}
        >
            <Img />

            <ItemName>
                {props.item.item_name}
            </ItemName>
            <ItemPrice>
                {props.item.sale_nis} ₪
            </ItemPrice>


            {/* {open && <PopUp />} */}
        </Container>

    )
}

export default Item


const PopUp = (props: Props) => {

    return (

        <PopUpContainer
            initial={{
                opacity: 0,
                // y: +1000

            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                // delay: (0.15 / 30)
                duration: 0.3,

            }}
        >

            <PopUpItem
                onClick={(e) => e.stopPropagation()}

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
                    duration: 0.2,

                }}
            >

            </PopUpItem>
        </PopUpContainer>
    )
}
