import React from 'react'
import styled from 'styled-components';
import Item from '../../components/item';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: flex-start;
width: 100%;
`;



type Props = {}

const Items = (props: Props) => {
    const items = 15;

    return (
        <Container>
            <Item />
            <Item />
            <Item />
            <Item />
            {/* {
                items. */}
        </Container>
    )
}

export default Items