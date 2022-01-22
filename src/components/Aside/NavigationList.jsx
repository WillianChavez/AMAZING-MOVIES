import styled from 'styled-components'
import LinkCategory from './LinkCategory'
import { getNameCategories, getIconNamesClass } from './../../services/fetchMovies'

const nameCategories = getNameCategories()
const icons = getIconNamesClass()
const NavList = styled.ul`
    & {
        list-style: none;
        padding: 4em 0.5em;
    }
`

export default function NavigationList() {
    return (
        <nav>
            <NavList>
                <LinkCategory category="home" path="/" iconName="ph-house-simple" />
                {nameCategories.map((category) => (
                    <LinkCategory path={'category/' + category} key={category} category={category} iconName={icons[category]} />
                ))}
            </NavList>
        </nav>
    )
}
