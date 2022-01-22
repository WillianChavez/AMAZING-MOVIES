import { useState, useEffect, useRef } from 'react'
import Movie from '../Movie/'

export default function MovieSlide(props) {
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
            threshold: 0.66,
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
            ref.current.firstChild.firstChild.classList.add('active')
        } else if (ref.current && !isActive) {
            ref.current.firstChild.firstChild.classList.remove('active')
        }
    }, [isActive])

    return (
        <div ref={ref} className="hola">
            <Movie {...props} />
        </div>
    )
}
