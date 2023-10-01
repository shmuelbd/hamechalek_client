import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
width: 44%;
height: 250px;

margin: 3%;
background-color: azure;
`;



type Props = {}

const Item = (props: Props) => {
    return (
        <Container>Item</Container>
    )
}

export default Item