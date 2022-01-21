import styled from 'styled-components'
import { colors } from '../../stylesConfig'
const MainHeader = styled.header`
    & {
        background-image: linear-gradient(hsl(${colors.black}), hsl(${colors.gray}));
        border-radius: 0 0 15px 15px;
        padding: 1em;
        margin-bottom: 3em;
    }
`

const LogoContainer = styled.div`
    & {
        margin-left: auto;
        margin-right: auto;
        max-width: 200px;
        height: 100px;
    }

    @media only screen and (min-width: 768px) {
        & {
            margin-left: 1em;
            margin-right: 0;
        }
    }
`

export default function Header() {
    return (
        <MainHeader>
            <LogoContainer>
                <img src="icon.png" alt="Logo amazing movies" class="logo" />
            </LogoContainer>
        </MainHeader>
    )
}
