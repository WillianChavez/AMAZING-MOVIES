import styled from 'styled-components'
import { colors } from '../../stylesConfig'
import ListOfMovies from './LIstOfMovies'
import Pagination from './../../components/Pagination'

import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { getMoviesByCategory } from '../../services/fetchMovies'
import ContainerMain from '../../components/ContainerMain'

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

    let [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])

    const nextPage = () => {
        let intPage = parseInt(page)
        setPage(intPage + 1)
    }

    const prevPage = () => {
        let intPage = parseInt(page)
        setPage(intPage - 1)
    }

    useEffect(() => {
        getMoviesByCategory(params.category, page).then((res) => {
            setMovies(res)
        })
    }, [page, params.category])

    useEffect(() => {
        if (searchParams.get('page')) {
            let intPage = parseInt(searchParams.get('page'))
            if (intPage >= 1) {
                setPage(searchParams.get('page'))
            } else {
                setSearchParams(searchParams.delete('page'))
            }
        }
    }, [searchParams, setSearchParams])

    useEffect(() => {
        setCategory((prevCategory) => {
            if (prevCategory !== params.category) {
                setPage(1)
                return params.category
            }
        })
    }, [params.category])
    return (
        <ContainerMain>
            <SectionMovies>
                <ListOfMovies movies={movies} />
            </SectionMovies>
            <Pagination nextPage={nextPage} prevPage={prevPage} page={page} />
        </ContainerMain>
    )
}
