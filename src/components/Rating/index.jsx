import styled from 'styled-components'
import { colors, fontSizes } from '../../stylesConfig'

const RatingContainer = styled.div`
    & {
        min-height: 40px;
        max-height: 50px;
        padding: 1em;
        display: flex;
        min-width: 85px;
        justify-content: start;
        align-items: center;
    }
`
const Text = styled.p`
    & {
        font-size: ${(props) => props.fontSize || fontSizes.medium};
        font-weight: bold;
        margin: 0;
    }
`
const Start = styled.div`
    & {
        background-color: hsl(${colors.orange});
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        height: 30px;
        margin-left: 0.4em;
        width: 30px;
    }
`

export default function Rating({ text = '', fontSize }) {
    return (
        <RatingContainer>
            <Text fontSize={fontSize}>{text}</Text>
            <Start />
        </RatingContainer>
    )
}
