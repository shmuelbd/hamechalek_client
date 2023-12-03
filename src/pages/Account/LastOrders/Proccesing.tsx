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
height: 100px;
margin: 3%;
padding-top: 5px;
user-select: none;
text-decoration: none;
border-radius: 10px;
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
            <Skeleton width="100%" height="50px"></Skeleton>
            <Skeleton width="70%" height="15px"></Skeleton>
            <Skeleton width="60%" height="10px"></Skeleton>
        </Container>
    )
}