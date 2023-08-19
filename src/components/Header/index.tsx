import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 40px;
background-color: #f3f3f3;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Rubik', sans-serif;
font-weight: 900;
`;

type Props = {}

const Header = (props: Props) => {
    return (
        <Container>שיווק המחלק</Container>
    )
}

export default Header