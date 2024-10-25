import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { default_color } from '../../../../../../env';
import OrdersSvg from '../../../../../../assets/svg/orders';
import PaymentsSvg from '../../../../../../assets/svg/payments';
import CheckSvg from '../../../../../../assets/svg/check';

const Container = styled(motion.div)`
width: 100%;
display: flex;
/* flex-wrap: wrap; */
justify-content: center;
align-items: center;
height: 80px;
`;

const BGLine = styled(motion.div)`
border-top: 2px solid ${default_color};
width: 90%;
position: absolute;
`;

const Boxes = styled(motion.div)`
width: 90%;
/* background-color: aqua; */
/* height: 20px; */
display: flex;
justify-content: space-between;

`;

const Box = styled(motion.div)`
border: 1px solid ${default_color};
width: 50px;
height: 50px;
border-radius: 50px;
background-color: #ffffff;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
`;

const Stepper = () => {
    return (
        <Container>
            <BGLine />
            <Boxes>
                <Box>
                    <CheckSvg />
                </Box>
                <Box>
                    <PaymentsSvg />
                </Box>
                <Box>
                    <OrdersSvg />
                </Box>
            </Boxes>
        </Container>
    )
}

export default Stepper