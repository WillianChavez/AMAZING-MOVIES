import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../stylesConfig'
import { useNavigate } from 'react-router-dom'
import Icon from '../Icon'
import logo from './../../assets/icon.png'
const MainHeader = styled.header`
    & {
        background-image: linear-gradient(hsl(${colors.black}), hsl(${colors.gray}));
        border-radius: 0 0 15px 15px;
        padding: 1.5em;
        margin-bottom: 3em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-left: 160px;
        gap: 1em;
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

const SearchContainer = styled.form`
    & {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-basis: 400px;
        height: 100%;
        font-size: 1.6rem;
        margin: 0 auto;
    }
`
const SearchInput = styled.input`
    & {
        flex-grow: 1;

        font-family: inherit;
        font-size: 1.2rem;
        padding: 0.5em;
    }
`

const SearchButton = styled.button`
    & {
        flex-basis: 50px;
        appearance: none;
        border: none;
        background-color: transparent;
        font-size: inherit;
        cursor: pointer;
    }
`
const LogoContainer = styled(Link)`
    & {
        margin-left: auto;
        margin-right: auto;
        display: block;
        max-width: 200px;
        height: 100px;
    }
`
export default function Header() {
    let navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/results?query=${e.target[0].value}&&page=1`)
    }
    return (
        <MainHeader>
            <LogoContainer to="/">
                <img src={logo} alt="Logo amazing movies" />
            </LogoContainer>
            <SearchContainer onSubmit={handleSubmit}>
                <SearchInput type="search" placeholder="Search" />
                <SearchButton>
                    <Icon name="ph-magnifying-glass" color="#fff" />
                </SearchButton>
            </SearchContainer>
        </MainHeader>
    )
}
