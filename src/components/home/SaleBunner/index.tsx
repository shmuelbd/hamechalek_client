import styled from 'styled-components';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import saleItems from '../../../data/sale';


const Container = styled.div`
width: 100%;
height: 100px;
background-color: #ffffff;
/* background-color: #f3f3f3; */
display: flex;
align-items: center;
justify-content: space-between;
overflow-y: hidden; 
overflow-x: scroll; 
 &::-webkit-scrollbar {
    display: none;
 }
 `;
const SaleIcon = styled.div`
width: 90px;
height: 100%;
right: -30px;
position: relative;
padding-bottom: 20px;
`;
const Story = styled.div`
height: 90px;
display: flex;

`;
const StoryItem = styled.div`
width: 70px;
height: 70px;
background-color: #ffffff;
display: flex;
flex-wrap: wrap;
align-content: center;
align-items: center;
justify-content: center;
border-radius: 50px;
border: 1.8px solid #7F5AFF;
/* border: 1.3px solid #f08140; */
margin: 0 3px;
`;
const ImgStory = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;

`;

type Props = {}


const SaleBunner = (props: Props) => {


    return (
        <Container>
            <SaleIcon>
                <Player
                    autoplay
                    speed={1}
                    loop={true}
                    src="https://lottie.host/23e20bfe-b448-4d52-8d81-fe473c1419b8/O4gnSrVgOD.json"
                    style={{ height: '70px', width: '150px' }}
                >
                </Player>
            </SaleIcon>
            <Story>

                {
                    saleItems.map((item, index) => (
                        <StoryItem key={index}>
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