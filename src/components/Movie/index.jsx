import styled from 'styled-components'
import { colors, fontSizes } from './../../stylesConfig'

const MovieItem = styled.article`
    & {
        min-height: 350px;
        max-width: 500px;
        max-height: 600px;
        min-width: 250px;
        border-radius: 30px;
        border: 1px solid hsl(${colors.white}, 0.2);

        overflow: hidden;
        position: relative;
        transition: all 1s ease;
    }
    &.active {
        transform: scale(1.1);
        margin: 0 1em;
    }
`
const MovieImgContainer = styled.div`
    & {
        height: 80%;
    }
`
const MovieTitle = styled.p`
    & {
        text-align: center;
        border-radius: 30px;
        font-size: ${fontSizes.medium};
        font-weight: bold;
        height: 20%;
    }
`

export default function Movie({ title, posterPath }) {
    return (
        <MovieItem>
            <MovieImgContainer>
                <img src={posterPath} alt={title} />
            </MovieImgContainer>
            <MovieTitle>{title}</MovieTitle>
        </MovieItem>
    )
}
