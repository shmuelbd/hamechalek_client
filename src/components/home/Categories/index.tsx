import React from 'react'
import styled from 'styled-components';
import categories from '../../../data/categories';

const Container = styled.div`
width: 96%;
height: 300px;
/* background-color: #e62929; */
display: flex;
flex-wrap:wrap;
align-items: center;
justify-content: space-between;
margin-left: 2%;
margin-right: 2%;
box-sizing: border-box;
`;
const Item = styled.div<{ background: string }>`
width: 25%;
aspect-ratio : 1 / 1;
background-color: aqua;
padding: 10px;
border-radius: 50%;
background-image: ${(props) => props.background} ;
background-size: cover;
background-position: center;
`;

type Props = {}

const Categories = (props: Props) => {
    return (
        <Container>
            {
                categories.map((item: any, index: any) => {
                    return (
                        <Item background={`url(${item.pic})`}>
                            {/* {item.name} */}
                        </Item>
                    )
                })
            }
        </Container>
    )
}

export default Categories