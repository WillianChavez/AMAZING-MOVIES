import styled from 'styled-components'

import Slider from '../../components/Slider'
import Categories from '../../components/Categories'
import ContainerMain from '../../components/ContainerMain'
export default function Home() {
    return (
        <ContainerMain>
            <Slider />
            <Categories />
        </ContainerMain>
    )
}
