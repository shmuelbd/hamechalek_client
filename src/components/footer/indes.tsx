import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 75px;
/* background-color: #f3f3f3; */
background-color: #ffffff;
-webkit-box-shadow: 0px 8px 23px 9px rgba(0,0,0,0.2); 
box-shadow: 0px 8px 23px 9px rgba(0,0,0,0.2);
position: fixed;
z-index: 100;
bottom: 0;
left: 0;
display: flex;
align-items: center;
user-select: none;
 `;

const Item = styled(NavLink)`
display: flex;
align-items: center;
justify-content: center;
width: 20%;
font-size: 50px;
text-decoration: none;
cursor: pointer;
user-select: none;
-webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  -webkit-tap-highlight-color: transparent;
& span{
    font-size: 35px;
    font-weight: 250;
    color: #7F5AFF;
    }

&:hover {
    color: #4a83fd;
}
  &.active > p {
    color: #cf002d;
  }
  &.active > span {
    color: #019DDA;
    font-size: 50px;
    transition: 0.2s;
  }
 
`;



type Props = {}

const menuItems = [
    {
        name: "profile",
        icon: "person",
        link: "profile"
    },
    {
        name: "sale",
        icon: "sell",
        link: "sale"
    },
    {
        name: "categories",
        icon: "grid_view",
        link: "categories"
    },
    {
        name: "home",
        icon: "home",
        link: "/"
    },
    {
        name: "cart",
        icon: "shopping_cart",
        link: "cart"
    },
]

const Footer = (props: Props) => {
    return (
        <Container>
            {
                menuItems.map((item: any, index: any) => (
                    <Item
                        key={index}
                        to={item.link}
                    >
                        <span className="material-symbols-rounded">{item.icon}</span>
                    </Item>
                ))

            }

        </Container>
    )
}

export default Footer