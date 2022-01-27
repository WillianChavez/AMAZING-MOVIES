import styled from 'styled-components'

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

export default function ContainerMain({ children }) {
    return <Main>{children}</Main>
}
