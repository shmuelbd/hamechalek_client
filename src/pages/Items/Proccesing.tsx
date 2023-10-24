import React from 'react'
import styled from 'styled-components';
import { Skeleton } from 'primereact/skeleton';
import { ProgressBar } from 'primereact/progressbar';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: right;
align-items: flex-start;
width: 44%;
height: 250px;
margin: 3%;
padding-top: 5px;
/* background-color: #9b1d14; */
user-select: none;
text-decoration: none;
border-radius: 10px;
`;
const Price = styled.div`
width: 100%;
display: flex;
justify-content: left;
`;


type Props = {}

const Proccesing = (props: Props) => {
    return (
        <>
            <Procces />
            <Procces />
            <Procces />
            <Procces />
            <Procces />
            <Procces />
        </>
    )
}

export default Proccesing

const Procces = (props: Props) => {
    return (
        <Container>
            <Skeleton width="100%" height="150px"></Skeleton>
            <Skeleton width="70%" height="30px"></Skeleton>
            <Price>
                <div></div>
                <Skeleton width="60%" height="20px"></Skeleton>
            </Price>


        </Container>
    )
}