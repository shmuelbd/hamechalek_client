import styled from 'styled-components';
import { Player, Controls } from '@lottiefiles/react-lottie-player';


const Container = styled.div`
width: 100%;
height: 90px;
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: space-between;
position: absolute;
overflow: scroll;
`;
const SaleIcon = styled.div`
width: 80px;
height: 100%;
right: -30px;
position: relative;
`;
const Story = styled.div`
height: 60px;
display: flex;
`;
const StoryItem = styled.div`
width: 50px;
height: 50px;
background-color: #ffffff;
display: flex;
flex-wrap: wrap;
align-content: center;
align-items: center;
justify-content: center;
border-radius: 50px;
border: 2.5px solid  #f08140;
margin: 0 3px;
`;
const ImgStory = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;

`;

type Props = {}

const saleItems = [
    {
        price: 3.90,
        pic: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/5/055490002-1662877680140271.jpg",
    },
    {
        name: "",
        price: 4.00,
        pic: "https://cdn.cashcow.co.il/images/f31b37b6-76e2-411c-86f5-9d23a8810717.jpg",
    },
    {
        name: "",
        price: 10.00,
        pic: "https://m.media-amazon.com/images/I/61-PPjux-IL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        name: "",
        price: 10.90,
        pic: "https://www.dalas.co.il/wp-content/uploads/2019/07/%D7%99%D7%A2%D7%94-%D7%9E%D7%A4%D7%9C%D7%A1%D7%98%D7%99%D7%A7-300x300.jpg",
    },
    {
        price: 3.90,
        pic: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/5/055490002-1662877680140271.jpg",
    },
    {
        name: "",
        price: 4.00,
        pic: "https://cdn.cashcow.co.il/images/f31b37b6-76e2-411c-86f5-9d23a8810717.jpg",
    },
    {
        name: "",
        price: 10.00,
        pic: "https://m.media-amazon.com/images/I/61-PPjux-IL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        name: "",
        price: 10.90,
        pic: "https://www.dalas.co.il/wp-content/uploads/2019/07/%D7%99%D7%A2%D7%94-%D7%9E%D7%A4%D7%9C%D7%A1%D7%98%D7%99%D7%A7-300x300.jpg",
    },
]

const SaleBunner = (props: Props) => {


    return (
        <Container>
            <SaleIcon>
                <Player
                    autoplay
                    speed={2}
                    loop={true}
                    src="https://lottie.host/2a7a524a-4bc9-4a19-87fb-c5426a0703bd/ik2JXWlTkr.json"
                    style={{ height: '90px', width: '150px' }}
                >
                </Player>
            </SaleIcon>
            <Story>

                {
                    saleItems.map((item, index) => (
                        <StoryItem>
                            <ImgStory src={item.pic} />
                        </StoryItem>
                    )
                    )
                }
            </Story>

        </Container>

    )
}

export default SaleBunner