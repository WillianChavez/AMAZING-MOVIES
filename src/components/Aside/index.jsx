import styled from 'styled-components'
import NavigationList from './NavigationList'

const AsideContainer = styled.aside`
    & {
        position: fixed;
        top: 0;
        left: 0;
        width: 160px;
        height: 100vh;
        background-color: red;
    }
`

export default function Aside() {
    return (
        <AsideContainer>
            <NavigationList />
        </AsideContainer>
    )
}
