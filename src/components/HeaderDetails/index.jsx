import styled from 'styled-components'
import Rating from '../Rating'
import { colors, fontSizes } from '../../stylesConfig'
import Backdrop from '../Backdrop'
const Header = styled.header`
    & {
        margin-bottom: 3em;
        display: flex;
        gap: 1em;
    }

    @media screen and (max-width: 667px) {
        & {
            justify-content: center;

            flex-wrap: wrap;
        }
    }
`
const Title = styled.h2`
    & {
        font-size: ${fontSizes.large};
        word-wrap: break-word;
    }
`
const Text = styled.p`
    & {
        color: hsla(${colors.white}, 0.7);
        font-size: ${fontSizes.medium};
        width: auto;
    }
`

export default function HeaderDetails({ title, voteAverage, releaseDate, genres = [], imgPath }) {
    const genresNames = []

    genres.forEach((genre) => {
        genresNames.push(genre.name)
    })

    return (
        <Header>
            <Backdrop imgPath={imgPath} title={title} />
            <div>
                <Title>
                    {title}

                    <Text>{genresNames.join(' | ')}</Text>
                </Title>

                <Text>Release Date {releaseDate}</Text>
                <Rating text={voteAverage} fontSize={'2.5em'} />
            </div>
        </Header>
    )
}
