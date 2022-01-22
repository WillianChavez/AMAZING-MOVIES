import styled from 'styled-components'

import Slider from '../../components/Slider'
import Header from './../../components/Header'
import Categories from '../../components/Categories'

const Main = styled.main`
    & {
        margin-left: 160px;
    }
`
export default function Home() {
    return (
        <Main>
            <Header />
            <Slider />
            <Categories />
        </Main>
    )
}
