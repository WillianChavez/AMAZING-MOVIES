import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById } from './../../services/fetchMovies'
import styled from 'styled-components'
import { colors, fontSizes } from '../../stylesConfig'
import ContainerMain from '../../components/ContainerMain'
import HeaderDetails from '../../components/HeaderDetails'
import ListCardsCompany from './listCardsCompany'
import LinkHomePage from './LinkHomePage'
const SectionDetails = styled.section`
    & {
        border-radius: 30px 30px 0 0;
        min-height: 100vh;
        margin-top: 2em;
        background-image: linear-gradient(hsl(${colors.gray}), hsl(${colors.black}) 70%);
    }
`
const Content = styled.div`
    & {
        padding: 2em;
    }
`
const Title = styled.h2`
    & {
        font-size: 2em;
    }
`
const Text = styled.p`
    & {
        font-size: ${fontSizes.medium};
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
                <Content>
                    <HeaderDetails
                        title={movie.title}
                        voteAverage={movie.vote_average}
                        releaseDate={movie.release_date}
                        genres={movie.genres}
                        imgPath={movie.backdrop_path}
                    />
                    <Title>Overview</Title>
                    <Text>{movie.overview}</Text>
                    <Title>Production Companies</Title>
                    <ListCardsCompany companies={movie.production_companies} />
                    <LinkHomePage movie={movie} />
                </Content>
            </SectionDetails>
        </ContainerMain>
    )
}
