import styled from 'styled-components'
import noImg from './../../assets/no-image.png'
const Container = styled.div`
    & {
        overflow: hidden;
        border-radius: 30px 0 0 0;
        max-width: 350px;
        height: auto;
    }

    @media screen and (max-width: 667px) {
        & {
            border-radius: 0;
        }
    }
`

const Img = styled.img`
    & {
        object-fit: cover;
        max-height: 300px;
        object-position: top;

        @media screen and (max-width: 667px) {
            & {
                max-height: 400px;
            }
        }
    }
`

export default function Backdrop({ imgPath = noImg, title }) {
    if (imgPath.endsWith('null')) imgPath = noImg
    return (
        <Container>
            <Img src={imgPath} alt={title} />
        </Container>
    )
}
