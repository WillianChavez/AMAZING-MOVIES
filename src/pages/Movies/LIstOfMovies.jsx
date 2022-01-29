import styled from 'styled-components'
import Movie from '../../components/Movie'
import Spiner from '../../components/Spiner'
import Icon from '../../components/Icon'
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
const NoResults = styled.div`
    & {
        text-align: center;
        font-size: 3rem;
        margin-top: 1em;
    }
`

export default function ListOfMovies({ movies = [], loading }) {
    if (loading) return <Spiner />
    if (movies.length === 0)
        return (
            <NoResults>
                <h1>No movies avaible</h1>
                <Icon name="ph-smiley-sad" />
            </NoResults>
        )
    return (
        <List>
            {movies.map((movie) => (
                <Movie key={movie.id} id={movie.id} posterPath={movie.poster_path} voteAverage={movie.vote_average} title={movie.title} />
            ))}
        </List>
    )
}
