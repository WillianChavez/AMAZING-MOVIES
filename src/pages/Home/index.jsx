import Slider from '../../components/Slider'
import Categories from '../../components/Categories'
import ContainerMain from '../../components/ContainerMain'
export default function Home() {
    window.scrollTo(0, 0)
    return (
        <ContainerMain>
            <Slider />
            <Categories />
        </ContainerMain>
    )
}
