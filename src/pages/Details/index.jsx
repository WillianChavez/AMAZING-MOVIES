import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById } from './../../services/fetchMovies'
import styled from 'styled-components'
import { colors, fontSizes } from '../../stylesConfig'
import ContainerMain from '../../components/ContainerMain'
import Backdrop from '../../components/Backdrop'
const SectionDetails = styled.section`
    & {
        border-radius: 30px 30px 0 0;
        min-height: 100vh;
        margin-top: 2em;
        padding-top: 1em;
        padding-bottom: 1em;
        background-image: linear-gradient(hsl(${colors.gray}), hsl(${colors.black}));
    }
`

export default function Details() {
    const [movie, setMovie] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getMovieById(id).then((movie) => setMovie(movie))
    }, [id])

    return (
        <ContainerMain>
            <SectionDetails>
                <Backdrop imgPath={movie.backdrop_path} title={movie.title} />
            </SectionDetails>
        </ContainerMain>
    )
}
