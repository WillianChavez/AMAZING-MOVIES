import styled from 'styled-components'
import { colors, fontSizes } from '../../stylesConfig'

const RatingContainer = styled.div`
    & {
        height: 40px;
        padding: 1em;
        display: flex;
        width: 85px;
        justify-content: space-evenly;
        align-items: center;
        background-color: hsla(${colors.black}, 0.5);
    }
`
const Text = styled.p`
    & {
        font-size: ${(props) => props.fontSize || fontSizes.medium};
        font-weight: bold;
    }
`
const Start = styled.div`
    & {
        background-color: hsl(${colors.orange});
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        height: 30px;
        margin-left: 0.4em;
        width: 40px;
    }
`

export default function Rating({ text = 0, fontSize }) {
    return (
        <RatingContainer>
            <Text fontSize={fontSizes}>{text}</Text>
            <Start />
        </RatingContainer>
    )
}
