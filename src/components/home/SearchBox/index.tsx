import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 70px;
background-color: #f3f3f3;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 0 0 30px 30px;
`;
const Txt = styled.p`
font-size: 2.0vh;
font-family: 'Rubik', sans-serif;
padding-right: 30px;
height: 100%;
display: flex;
align-items: center;
color: #757575;
`;
const Icon = styled.div`
padding-left: 20px;
height: 100%;
display: flex;
align-items: center;
`;


type Props = {}

const SearchBox = (props: Props) => {
    return (
        <Container>
            <Txt>זה המקום להכניס שם מוצר לחיפוש</Txt>
            <Icon>
                <span className="material-symbols-outlined">search</span>
            </Icon>
        </Container>
    )
}

export default SearchBox