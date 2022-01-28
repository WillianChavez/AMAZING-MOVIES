import styled from 'styled-components'
import { colors, fontSizes } from '../../stylesConfig'
import noImg from './../../assets/no-image.png'

const Container = styled.article`
    & {
        flex-basis: 350px;
        height: auto;
    }
`

const ImgContainer = styled.div`
    & {
        height: 130px;

        background-color: hsl(${colors.white});
        padding: 0.5em;
    }
`
const Img = styled.img`
    & {
        object-fit: contain;
        height: 100px;
    }
`
const Text = styled.p`
    & {
        font-size: ${fontSizes.medium};
        background-color: hsla(${colors.white}, 0.2);
        text-align: center;
        padding: 0.5em;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    }
`
export default function Card({ imgPath = noImg, text }) {
    let imgPathFinal = imgPath
    if (imgPathFinal.endsWith('null')) imgPathFinal = noImg

    return (
        <Container>
            <ImgContainer>
                <Img src={imgPathFinal} alt="" />
            </ImgContainer>
            <Text>{text}</Text>
        </Container>
    )
}
