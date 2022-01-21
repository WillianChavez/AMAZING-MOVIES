import styled from 'styled-components'
import { useEffect, useState, useRef } from 'react'
import { colors, fontSizes } from '../../stylesConfig'

const MovieItem = styled.article`
    & {
        min-height: 350px;
        max-width: 500px;
        max-height: 600px;
        min-width: 250px;
        border-radius: 30px;
        border: 1px solid hsl(${colors.white}, 0.2);

        overflow: hidden;
        position: relative;
        transition: all 1s ease;
    }
    &.active {
        transform: scale(1.1);
        margin: 0 1em;
    }
`
const MovieImgContainer = styled.div`
    & {
        height: 80%;
    }
`
const MovieTitle = styled.p`
    & {
        text-align: center;
        border-radius: 30px;
        font-size: ${fontSizes.medium};
        font-weight: bold;
        height: 20%;
    }
`

export default function Movie({ title, posterPath }) {
    return (
        <MovieItem>
            <MovieImgContainer>
                <img src={posterPath} alt={title} />
            </MovieImgContainer>
            <MovieTitle>{title}</MovieTitle>
        </MovieItem>
    )
}
export function MovieSlide({ title, posterPath }) {
    const ref = useRef()
    let el = ref.current
    const [isActive, setIsActive] = useState(false)

    const intersectingMovie = (entries) => {
        const [entry] = entries
        setIsActive(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(intersectingMovie, {
            root: document.querySelector('#slides'),
            threshold: 0.6,
        })
        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (el) {
                observer.unobserve(el)
            }
        }
    }, [el])

    useEffect(() => {
        if (ref.current && isActive) {
            ref.current.firstChild.classList.add('active')
        } else if (ref.current && !isActive) {
            ref.current.firstChild.classList.remove('active')
        }
    }, [isActive])

    return (
        <div ref={ref}>
            <Movie title={title} posterPath={posterPath} />
        </div>
    )
}
