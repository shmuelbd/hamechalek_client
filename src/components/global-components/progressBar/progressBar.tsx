import { ProgressBar } from 'primereact/progressbar'
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
position: fixed;
top: 0;
`;

type Props = {}

const ProgressBarCustom = (props: Props) => {
    return (
        <Container>
            <ProgressBar mode="indeterminate" style={{ height: '3px' }}></ProgressBar>
        </Container>
    )
}

export default ProgressBarCustom