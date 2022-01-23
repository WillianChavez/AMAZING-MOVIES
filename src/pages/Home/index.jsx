import styled from 'styled-components'

import Slider from '../../components/Slider'
import Categories from '../../components/Categories'

const Main = styled.main`
    & {
        margin-left: 160px;
    }

    @media screen and (max-width: 768px) {
        & {
            margin-left: 70px;
        }
    }
    @media screen and (max-width: 460px) {
        & {
            margin-left: 0px;
        }
    }
`
export default function Home() {
    return (
        <Main>
            <Slider />
            <Categories />
        </Main>
    )
}
