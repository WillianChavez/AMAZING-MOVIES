import styled from 'styled-components'
import { colors } from '../../stylesConfig'
import ListOfMovies from './LIstOfMovies'

const Main = styled.main`
    & {
        margin-left: 175px;
    }
    @media screen and (max-width: 768px) {
        & {
            margin-left: 70px;
        }
    }
    @media screen and (max-width: 460px) {
        & {
            margin-left: 0px;
        }
    }
`
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
    return (
        <Main>
            <SectionMovies>
                <ListOfMovies />
            </SectionMovies>
        </Main>
    )
}
