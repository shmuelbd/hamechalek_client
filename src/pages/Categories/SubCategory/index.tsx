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
font-size: 18px;
`;
const SubCatIcon = styled.img<{ src: string }>`
min-width: 100px;
height: 100px;
border-radius: 50%;
src: ${(props) => props.src} ;
background-size: contain;
background-position: center;
background-repeat: no-repeat;
`;


type Props = {
    index: string,
    item: any
}



const SubCategory = (props: Props) => {

    return (
        <SubCatItem>

            <SubCatIcon key={props.index}
                src={`https://xn--8dbgpg1c.xn--4dbrk0ce/images/${props.item.pic}.jpg`}
            >
            </SubCatIcon>
            {props.item.name}
        </SubCatItem>
    )
}

export default SubCategory