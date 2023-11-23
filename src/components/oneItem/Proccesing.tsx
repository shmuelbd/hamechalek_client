import React from 'react'
import styled from 'styled-components';
import { Skeleton } from 'primereact/skeleton';
import { ProgressBar } from 'primereact/progressbar';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: right;
align-items: flex-start;
width: 90%;
/* height: 100%; */
margin: 3%;
padding-top: 5px;
/* background-color: #9b1d14; */
user-select: none;
text-decoration: none;
border-radius: 20px;
`;
const Price = styled.div`
width: 100%;
display: flex;
justify-content: left;
`;
const Space = styled.div<{ height: string }>`
width: 100%;
height: ${(props) => props.height};
`;

type Props = {}

export const Proccesing = (props: Props) => {
    return (
        <Container>
            <Skeleton width="100%" height="350px"></Skeleton>
            <Space height='20px' />
            <Skeleton width="70%" height="30px"></Skeleton>
            <Space height='20px' />
            <Price>
                <div></div>
                <Skeleton width="60%" height="20px"></Skeleton>
            </Price>
            <Space height='20px' />
            <Skeleton width="100%" height="10px"></Skeleton>
            <Space height='10px' />
            <Skeleton width="100%" height="10px"></Skeleton>
            <Space height='10px' />
            <Skeleton width="100%" height="10px"></Skeleton>
            <Space height='10px' />
            <Skeleton width="100%" height="10px"></Skeleton>
            <Space height='10px' />
            <Skeleton width="100%" height="10px"></Skeleton>
            <Space height='10px' />
            <Skeleton width="100%" height="10px"></Skeleton>
            <Space height='10px' />
            <Skeleton width="100%" height="10px"></Skeleton>

        </Container>
    )
}

export const ImageProccesing = (props: Props) => {
    return (
        <Container>
            <Skeleton width="100%" height="350px"></Skeleton>

        </Container>
    )
}

