import styled from 'styled-components'
import { colors, fontSizes } from '../../stylesConfig'
import { Link } from 'react-router-dom'
import Rating from '../Rating'

const MovieContainer = styled(Link)`
    & {
        min-height: 500px;
        max-height: 600px;
        min-width: 230px;
        text-decoration: none;
        color: hsl(${colors.white});

        flex-grow: 1;
        flex-basis: 100px;
        display: block;
        position: relative;
    }
    @media screen and (max-width: 588px) {
        & {
            min-width: 300px;
            flex-grow: 0;
            flex-basis: 250px;
            position: relative;
        }
    }
`
const MovieItem = styled.div`
    & {
        width: 100%;
        height: 100%;
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

const RatingContainer = styled.div`
    & {
        position: absolute;
        top: 0;
        right: 0;
    }
`

const MovieImgContainer = styled.div`
    & {
        height: 80%;
        width: 100%;
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

export default function Movie({ title, posterPath, voteAverage, id }) {
    return (
        <MovieContainer to={`/movie/${id}`}>
            <MovieItem>
                <RatingContainer>
                    <Rating text={voteAverage} fontSize={fontSizes.small} />
                </RatingContainer>
                <MovieImgContainer>
                    <img src={posterPath} alt={title} />
                </MovieImgContainer>
                <MovieTitle>{title}</MovieTitle>
            </MovieItem>
        </MovieContainer>
    )
}
