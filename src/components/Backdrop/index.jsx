import styled from 'styled-components'
import { colors } from '../../stylesConfig'

const Container = styled.div`
    & {
        overflow: hidden;
        max-height: 500px;
        border-radius: 30px 30px 0 0;
    }
`

const Img = styled.img`
    & {
        object-fit: cover;
        mask-image: linear-gradient(hsl(${colors.black}), hsl(${colors.black} / 0.5));
    }
`

export default function Backdrop({ imgPath, title }) {
    return (
        <Container>
            <Img src={imgPath} alt={title} />
        </Container>
    )
}
