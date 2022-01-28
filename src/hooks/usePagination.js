import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { getMoviesByCategory } from '../services/fetchMovies'

export default function usePagination(numPage = 1) {
    let params = useParams()
    const [page, setPage] = useState(numPage)
    const [movies, setMovies] = useState([])
    const [, setCategory] = useState(params.category)
    const [isLoading, setIsLoading] = useState(true)
    let [searchParams, setSearchParams] = useSearchParams()

    const moveWindowTop = () => {
        window.scrollTo(0, 0)
    }

    const nextPage = () => {
        let intPage = parseInt(page)
        setPage(intPage + 1)
    }

    const prevPage = () => {
        let intPage = parseInt(page)
        setPage(intPage - 1)
    }

    useEffect(() => {
        getMoviesByCategory(params.category, page)
            .then((res) => {
                setMovies(res)

                moveWindowTop()
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                throw err
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

    return { page, movies, nextPage, prevPage, isLoading }
}
