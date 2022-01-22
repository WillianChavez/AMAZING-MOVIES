import styled from 'styled-components'
import { colors, fontSizes } from '../../stylesConfig'

const MovieContainer = styled.article`
    & {
        min-height: 350px;
        max-width: 500px;
        max-height: 600px;
        min-width: 250px;
        position: relative;
    }
`

const MovieItem = styled.div`
    & {
        min-height: 350px;
        max-width: 500px;
        max-height: 600px;
        min-width: 250px;
        border-radius: 30px;
        border: 1px solid hsl(${colors.white}, 0.2);

        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 1s ease;
    }
    &.active {
        transform: scale(1.1);
        margin: 0 1em;
    }
`

const Rating = styled.div`
    & {
        position: absolute;
        top: 0;
        right: 0;
        height: 40px;
        padding: 1em;
        display: flex;
        width: 80px;
        justify-content: space-evenly;
        align-items: center;
        font-size: ${fontSizes.small};
        font-weight: bold;
        background-color: hsla(${colors.black}, 0.5);
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
        height: 50px;
    }
`

export default function Movie({ title, posterPath, voteAverage }) {
    return (
        <MovieContainer>
            <MovieItem>
                <Rating>
                    <p>{voteAverage}</p>
                    <Start />
                </Rating>
                <MovieImgContainer>
                    <img src={posterPath} alt={title} />
                </MovieImgContainer>
                <MovieTitle>{title}</MovieTitle>
            </MovieItem>
        </MovieContainer>
    )
}
