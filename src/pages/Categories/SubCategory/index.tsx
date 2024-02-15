import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


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


`;

const LinkItem = styled(NavLink)`

font-size: 18px;
text-decoration: none;
cursor: pointer;
user-select: none;
-webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  -webkit-tap-highlight-color: transparent;

`;


type Props = {
    index: string,
    item: any
}



const SubCategory = (props: Props) => {

    return (
        <LinkItem to={`/items/${props.item.id}`}>
            <SubCatItem>


                <SubCatIcon key={props.index} loading="lazy"
                    src={`https://xndbgpgc.depro2.fcomet.com/images/${props.item.pic}.jpg`}
                >
                </SubCatIcon>
                {props.item.name}
            </SubCatItem>
        </LinkItem>
    )
}

export default SubCategory