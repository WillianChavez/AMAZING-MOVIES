import { useState } from 'react'
import styled from 'styled-components'
import NavigationList from './NavigationList'
import { colors } from '../../stylesConfig'
import Icon from '../Icon'

const AsideContainer = styled.aside`
    & {
        position: fixed;
        top: 0;
        left: 0;
        width: 160px;
        height: 100vh;
        background-image: linear-gradient(to top, hsl(${colors.gray}), hsl(${colors.black}));
        overflow-x: hidden;
        z-index: 10;
    }

    @media screen and (max-width: 768px) {
        & {
            width: 70px;
        }
    }
    @media screen and (max-width: 460px) {
        & {
            transform: translateX(-100%);
        }
        &.active {
            transform: translateX(0);
        }
    }
`
const BurgerMenu = styled.div`
    & {
        display: none;
        cursor: pointer;
        position: fixed;
        top: 30px;
        left: 10px;
        color: hsl(${colors.white});
        font-size: 1.5rem;
        background-color: hsl(${colors.black} / 0.5);
        z-index: 20;
        padding: 10px;

        border-radius: 20px;
    }
    @media screen and (max-width: 460px) {
        & {
            display: block;
        }
    }
`
export default function Aside() {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

    return (
        <>
            <AsideContainer className={isActive ? 'active' : ''}>
                <NavigationList />
            </AsideContainer>
            <BurgerMenu onClick={handleClick}>
                <Icon name={isActive ? 'ph-x' : 'ph-text-align-left'} />
            </BurgerMenu>
        </>
    )
}
