import styled from 'styled-components'
import { colors } from '../../stylesConfig'
import { Link } from 'react-router-dom'

const Footer = styled.footer`
    & {
        max-height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const PaginationContainer = styled.div`
    & {
        height: 50px;
        display: flex;
        gap: 2em;
        align-items: center;

        color: hsl(${colors.white});

        font-weight: bold;
    }
`

const PaginnationButton = styled(Link)`
    & {
        text-decoration: none;
        background-color: hsl(${colors.black});
        display: flex;
        justify-content: center;
        align-items: center;
        color: inherit;

        font-size: 4rem;
        padding: 0.3em;
        cursor: pointer;
    }
    &.disable {
        pointer-events: none;
        color: hsl(${colors.gray});
    }
`

export default function Pagination({ page = 1, nextPage, prevPage }) {
    let intPage = parseInt(page)
    return (
        <Footer>
            <PaginationContainer>
                <PaginnationButton to={`?page=${intPage - 1}`} className={page === 1 || page === '1' ? 'disable' : ''} onClick={prevPage}>
                    &lt;
                </PaginnationButton>

                <p>{page}</p>

                <PaginnationButton to={`?page=${intPage + 1}`} onClick={nextPage}>
                    &gt;
                </PaginnationButton>
            </PaginationContainer>
        </Footer>
    )
}
