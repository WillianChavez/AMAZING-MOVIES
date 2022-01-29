import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById } from './../../services/fetchMovies'
import styled from 'styled-components'
import { colors } from '../../stylesConfig'
import ContainerMain from '../../components/ContainerMain'
import Content from './Content'
const SectionDetails = styled.section`
    & {
        border-radius: 30px 30px 0 0;
        min-height: 100vh;
        margin-top: 2em;
        background-image: linear-gradient(hsl(${colors.gray}), hsl(${colors.black}) 70%);
    }
`
export default function Details() {
    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        getMovieById(id)
            .then((movie) => {
                window.scrollTo(0, 0)
                setMovie(movie)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                throw error
            })
    }, [id])

    return (
        <ContainerMain>
            <SectionDetails>
                <Content movie={movie} isLoading={isLoading} />
            </SectionDetails>
        </ContainerMain>
    )
}
