import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors } from '../../stylesConfig'
import Icon from '../Icon'
const LinkCategoryItem = styled(NavLink)`
    & {
        color: hsl(${colors.white});
        text-decoration: none;
        height: 3em;
        padding: 1em 0.4em;
        display: flex;
        font-size: 1.2em;
        align-items: flex-start;
        cursor: pointer;
    }

    &.active {
        color: hsl(${colors.orange});
    }
    @media screen and (max-width: 768px) {
        & {
            font-size: 1.5rem;
        }
    }
`
const Span = styled.span`
    & {
        display: block;
        margin-left: 0.5em;
        font-size: 1.25em;
        text-transform: capitalize;
    }

    @media screen and (max-width: 768px) {
        & {
            margin-left: 0.6em;
        }
    }
`

export default function LinkCategory({ category, iconName, path }) {
    return (
        <LinkCategoryItem title={category} to={path} className={({ isActive }) => (isActive ? 'active' : '')}>
            <Icon name={iconName} />
            <Span>{category}</Span>
        </LinkCategoryItem>
    )
}
