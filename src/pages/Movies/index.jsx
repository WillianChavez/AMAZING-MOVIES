import styled from 'styled-components'
import { colors } from '../../stylesConfig'
import ListOfMovies from './LIstOfMovies'
import Pagination from './../../components/Pagination'
import ContainerMain from '../../components/ContainerMain'
import usePagination from '../../hooks/usePagination'

const SectionMovies = styled.section`
    & {
        border-radius: 30px 30px 0 0;
        min-height: 100vh;
        margin-top: 2em;
        padding-top: 1em;
        padding-bottom: 1em;
        background-image: linear-gradient(hsl(${colors.gray}), hsl(${colors.black}));
    }
`

export default function Movies() {
    const { page, movies, nextPage, prevPage, isLoading } = usePagination()

    return (
        <ContainerMain>
            <SectionMovies>
                <ListOfMovies movies={movies} loading={isLoading} />
            </SectionMovies>
            <Pagination nextPage={nextPage} prevPage={prevPage} page={page} />
        </ContainerMain>
    )
}
