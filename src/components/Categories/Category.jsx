import styled from 'styled-components'
import { colors } from './../../stylesConfig'
const CategoryItem = styled.li`
    & {
        border-radius: 30px;
        overflow: hidden;
        flex-basis: calc(300px - 1em);
        flex-grow: 1;
    }
`

const ImgContainer = styled.div`
    & {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`

const Title = styled.h2`
    & {
        background-color: hsla(${colors.white}, 0.3);
        margin: 0;
        text-align: center;
        text-transform: uppercase;
        padding: 1em;
        font-size: var(--ft-md);
    }
`

export default function Category({ title, imgPath }) {
    return (
        <CategoryItem>
            <ImgContainer>
                <img src={imgPath} alt={title} />
            </ImgContainer>
            <Title>{title}</Title>
        </CategoryItem>
    )
}
