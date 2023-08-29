import React from 'react'
import styled from 'styled-components';


const SubCatItem = styled.div`
width: 100px;
margin: 6px;
display: flex;
flex-wrap: wrap;
align-items: stretch;
justify-content: center;
text-align: center;
`;
const SubCatIcon = styled.div<{ background: string }>`
min-width: 100px;
height: 70px;
border-radius: 50%;
background-image: ${(props) => props.background} ;
background-size: cover;
background-position: center;
`;


type Props = {
    index: string,
    item: any
}

const SubCategory = (props: Props) => {
    return (
        <SubCatItem>

            <SubCatIcon key={props.index}
                background={`url(${props.item.pic})`}
            >
            </SubCatIcon>
            {props.item.name}
        </SubCatItem>
    )
}

export default SubCategory