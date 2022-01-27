import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getLatestMovies } from './../../services/fetchMovies'
import MovieSlide from '../Movie/MovieSlide'
import { fontSizes } from '../../stylesConfig'

const Slides = styled.div`
    & {
        display: flex;
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        padding: 2em 4em 3em 2em;
        gap: 3em;
        scroll-snap-type: x mandatory;
        height: 600px;
    }

    &::-webkit-scrollbar {
        height: 15px;
        background-color: #222831;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #393e46;
    }
`
const Title = styled.h2`
    & {
        margin-left: 1em;
        font-size: ${fontSizes.large};
    }
`

export default function Slider() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getLatestMovies().then(setMovies)
    }, [])

    return (
        <section>
            <Title>Latest Movies</Title>
            <Slides id="slides">
                {movies.map(({ id, title, poster_path, vote_average }) => (
                    <MovieSlide key={id} title={title} posterPath={poster_path} voteAverage={vote_average} id={id} />
                ))}
            </Slides>
        </section>
    )
}
