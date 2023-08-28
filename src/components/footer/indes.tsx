import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 75px;
/* background-color: #f3f3f3; */
background-color: #ffffff;
-webkit-box-shadow: 0px 8px 23px 9px rgba(0,0,0,0.2); 
box-shadow: 0px 8px 23px 9px rgba(0,0,0,0.2);
position: sticky;
z-index: 100;
bottom: 0;
left: 0;
display: flex;
align-items: center;
/* justify-content: space-between; */
/* padding: 0 10px; */
/* overflow-y: hidden; 
overflow-x: scroll; 
 &::-webkit-scrollbar {
    display: none;
 } */
 `;
const Item = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 20%;
font-size: 50px;
& span{
    font-size: 35px;
    font-weight: 250;
    }
`;

type Props = {}

const menuItems = [
    {
        name: "profile",
        icon: "person",
        link: ""
    },
    {
        name: "sale",
        icon: "sell",
        link: ""
    },
    {
        name: "categories",
        icon: "grid_view",
        link: ""
    },
    {
        name: "home",
        icon: "home",
        link: ""
    },
    {
        name: "cart",
        icon: "shopping_cart",
        link: ""
    },
]

const Footer = (props: Props) => {
    return (
        <Container>
            {
                menuItems.map((item: any, index: any) => (
                    <Item key={index}>
                        <span className="material-symbols-rounded">{item.icon}</span>
                    </Item>
                ))

            }

        </Container>
    )
}

export default Footer