import styled from 'styled-components'
import { colors, fontSizes } from '../../stylesConfig'
import { getCategories } from '../../services/fetchMovies'
import Category from './Category'
const SectionCategories = styled.section`
    & {
        border-radius: 30px 30px 0 0;
        margin-top: 2em;
        padding-top: 1em;
        padding-bottom: 1em;
        background-image: linear-gradient(hsl(${colors.gray}), hsl(${colors.black}));
    }
`

const Title = styled.h2`
    & {
        margin-left: 1em;
        font-size: ${fontSizes.large};
    }
`

const CategoriesList = styled.ul`
    & {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1em;
        padding: 1em;
        list-style: none;

        margin-left: auto;
        margin-right: auto;
        max-width: 1200px;
    }
`

export default function Categories() {
    return (
        <SectionCategories>
            <Title>Categories</Title>
            <CategoriesList>
                {getCategories().map(([category, imgPath]) => {
                    return <Category key={category} title={category} imgPath={imgPath} />
                })}
            </CategoriesList>
        </SectionCategories>
    )
}
