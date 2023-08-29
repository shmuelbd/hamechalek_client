import styled from 'styled-components';
import { motion } from "framer-motion"

const Container = styled(motion.div)`
width: 100%;
height: 70px;
background-color: #ffffff;
/* background-color: #f3f3f3; */
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 0 0 30px 30px;
-webkit-box-shadow: 0px 6px 5px -6px rgba(0,0,0,0.31); 
box-shadow: 0px 6px 5px -6px rgba(0,0,0,0.31);
`;
const Txt = styled.p`
font-size: 2.0vh;
font-family: 'Rubik', sans-serif;
padding-right: 30px;
height: 100%;
display: flex;
align-items: center;
color: #757575;
`;
const Icon = styled.div`
padding-left: 20px;
height: 100%;
display: flex;
align-items: center;
`;


type Props = {}

const SearchBox = (props: Props) => {
    return (
        <Container
            initial={{
                opacity: 0,
                y: -10

            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                // delay: (0.15 / 30)
                duration: 0.7,

            }}
        >
            <Txt>זה המקום להכניס שם מוצר לחיפוש</Txt>
            <Icon>
                <span className="material-symbols-outlined">search</span>
            </Icon>
        </Container>
    )
}

export default SearchBox