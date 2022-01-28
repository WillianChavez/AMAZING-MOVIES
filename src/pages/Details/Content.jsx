import styled from 'styled-components'
import HeaderDetails from '../../components/HeaderDetails'

import { fontSizes } from '../../stylesConfig'
import ListCardsCompany from './listCardsCompany'
import LinkHomePage from './LinkHomePage'
import Spiner from '../../components/Spiner'
const ContentContainer = styled.div`
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

export default function Content({ movie, isLoading }) {
    if (isLoading) return <Spiner />
    return (
        <ContentContainer>
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
        </ContentContainer>
    )
}
