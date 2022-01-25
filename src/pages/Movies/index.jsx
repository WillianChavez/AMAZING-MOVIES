import styled from 'styled-components'
import { colors } from '../../stylesConfig'
import ListOfMovies from './LIstOfMovies'
import Pagination from './../../components/Pagination'

import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { getMoviesByCategory } from '../../services/fetchMovies'

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
    let params = useParams()
    const [, setCategory] = useState(params.category)

    let [searchParams] = useSearchParams()
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])

    const nextPage = () => {
        let intPage = parseInt(page)
        setPage(intPage + 1)
    }

    const prevPage = () => {
        let intPage = parseInt(page)

        if (intPage !== 1) {
            setPage(intPage - 1)
        }
    }

    useEffect(() => {
        getMoviesByCategory(params.category, page).then((res) => {
            setMovies(res)
        })
    }, [page, params.category])

    useEffect(() => {
        if (searchParams.get('page')) {
            if (searchParams.get('page') !== '1') {
                setPage(searchParams.get('page'))
            }
        }
    }, [searchParams])

    useEffect(() => {
        setCategory((prevCategory) => {
            if (prevCategory !== params.category) {
                setPage(1)
                return params.category
            }
        })
    }, [params.category])
    return (
        <Main>
            <SectionMovies>
                <ListOfMovies movies={movies} />
            </SectionMovies>
            <Pagination nextPage={nextPage} prevPage={prevPage} page={page} />
        </Main>
    )
}
