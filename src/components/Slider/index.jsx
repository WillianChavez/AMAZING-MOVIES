import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getLatestMovies } from './../../services/fetchMovies'
import { MovieSlide } from '../Movie'

const Slides = styled.div`
    & {
        display: flex;
        width: 100%;
        overflow-x: scroll;
        padding: 2em 1em 3em;
        gap: 1.5em;
        scroll-snap-type: x mandatory;
    }

    &::-webkit-scrollbar {
        display: flex;
        height: 15px;
        background-color: #222831;

        cursor: pointer;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #393e46;
    }
`

export default function Slider() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getLatestMovies().then(setMovies)
    }, [])

    return (
        <Slides id="slides">
            {movies.map(({ id, title, poster_path }) => (
                <MovieSlide key={id} title={title} posterPath={poster_path} />
            ))}
        </Slides>
    )
}
