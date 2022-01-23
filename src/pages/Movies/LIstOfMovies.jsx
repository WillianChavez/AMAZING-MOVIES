import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Movie from '../../components/Movie'
import { getMoviesByCategory } from '../../services/fetchMovies'

const List = styled.ul`
    & {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
        padding: 1em;
        margin: 0;
        gap: 1em;
    }
`

export default function ListOfMovies() {
    let params = useParams()
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
    useEffect(() => {
        getMoviesByCategory(params.category, page).then((res) => {
            setMovies(res)
            console.log(res)
        })
    }, [page, params.category])

    return (
        <List>
            {movies.map((movie) => (
                <Movie key={movie.id} posterPath={movie.poster_path} voteAverage={movie.vote_average} title={movie.title} />
            ))}
        </List>
    )
}
