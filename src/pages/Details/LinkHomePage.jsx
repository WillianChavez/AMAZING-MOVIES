import styled from 'styled-components'
import { colors } from '../../stylesConfig'

const Link = styled.a`
    & {
        color: hsl(${colors.orange});
        font-size: 3em;
        display: block;
        text-align: center;
        text-decoration: none;
        margin-top: 1em;
        margin-bottom: 1em;
    }
`

export default function LinkHomePage({ movie }) {
    let src = movie.homepage
    if (src === '') return null

    return (
        <Link href={src} target="_blank" rel="noopener noreferrer">
            Go to Home Page
        </Link>
    )
}
