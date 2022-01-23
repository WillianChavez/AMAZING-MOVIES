import styled from 'styled-components'
import { colors } from '../../stylesConfig'
import logo from './../../assets/icon.png'
const MainHeader = styled.header`
    & {
        background-image: linear-gradient(hsl(${colors.black}), hsl(${colors.gray}));
        border-radius: 0 0 15px 15px;
        padding: 1.5em 4em;
        margin-bottom: 3em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

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
            margin-right: 1em;
        }
    }
`
export default function Header() {
    return (
        <MainHeader>
            <LogoContainer>
                <img src={logo} alt="Logo amazing movies" />
            </LogoContainer>
        </MainHeader>
    )
}
