import React, { useState } from 'react'
import styled from 'styled-components';
import { motion, useDragControls } from "framer-motion"


const Container = styled(motion.div)`
display: flex;
flex-wrap: wrap;
align-items: end;
width: 100vw;
bottom: 0;
right: 0;
height: 100vh;
z-index: 101;
background-color: #00000029;
overflow: hidden;
position: fixed;
`;
const Content = styled(motion.div)`
padding-top: 20px;
display: flex;
flex-wrap: wrap;
width: 100vw;
bottom: 0;
right: 0;
height: 87%;
background-color: #ffffff;
border-radius:20px 20px 0 0;
`;
const DivImage = styled(motion.div)`
border-radius: 50%;
display: flex;
justify-content: center;
`;
const Image = styled(motion.img) <{ src: string }>`
background-color: bisque;
src: ${(props) => props.src} ;
border-radius: 50%;
object-fit: cover;
width: 100%;
border-radius: 20px;
height: 70%;
`;





type Props = { setPopUp: React.Dispatch<React.SetStateAction<any>> }

const OneItemPopUp = (props: Props) => {
    const [onDragEnter, setonDragEnter] = useState(false)
    const controls = useDragControls()
    function startDrag(event: any) {
        controls.start(event)
    }
    const closePopUp = (e: any) => {
        if (e.pageY > 500)
            props.setPopUp(false);
    }

    return (
        <Container onClick={() => props.setPopUp(false)} onDrop={(e) => console.log("onDrop: ", e)} >

            <Content
                onClick={(e) => e.stopPropagation()}
                drag="y"
                dragConstraints={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
                onDrag={(e) => closePopUp(e)}
                onTap={() => setonDragEnter(true)}
                initial={{
                    y: +1000
                }}
                animate={{
                    y: 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                // transition={{ duration: 0.5, ease: 'easeOut' }}

                exit={{
                    y: +1000
                }}
                key="modalscs"

            >
                <DivImage>
                    <Image src={"https://wrz.co.il/wp-content/uploads/2021/05/IMG_20210506_234104.jpg"} alt="Avatar" />
                </DivImage>
            </Content>
        </Container >
    )
}

export default OneItemPopUp