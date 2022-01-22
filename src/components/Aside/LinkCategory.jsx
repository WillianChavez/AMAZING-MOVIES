import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../stylesConfig'
import Icon from '../Icon'
const LinkCategoryItem = styled(Link)`
    & {
        color: hsl(${colors.white});
        text-decoration: none;
        height: 3em;
        padding: 1em 0.4em;
        display: flex;
        font-size: 1.2em;
        align-items: flex-start;
    }
`
const Span = styled.span`
    & {
        display: block;
        margin-left: 0.5em;
        font-size: 1.25em;
        text-transform: capitalize;
    }
`

export default function LinkCategory({ category, iconName, path }) {
    return (
        <LinkCategoryItem to={path}>
            <Icon name={iconName} />
            <Span>{category}</Span>
        </LinkCategoryItem>
    )
}
