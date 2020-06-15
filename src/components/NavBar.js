import React, { useState } from 'react'
import styled from 'styled-components'


const NavBarAreaLeft = styled.div`
    background: transparent;
    position: absolute;
    width: calc(50% - 30px);
    height: 80px;
    top: 30px;
    left: calc(0% + 30px);
    z-index: 1;
`
const Logo = styled.p`
    font-family: ${p => p.theme.fonts.logo};
    color: ${p => p.theme.colors.light};
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    font-size: 35px;
`

const BurgerArea = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: calc(100% - 90px);
    transform: translate(-50%,-50%);
    cursor: pointer;
    div{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        span{
        display: block;
        width: 33px;
        height: 2px;
        margin: 8px;
        position: relative;
        background: ${p => p.theme.colors.light};
        border-radius: 3px;
        z-index: 1;
        transform-origin: 4px 0px;
        transition: 0.4s cubic-bezier(0.77,0.2,0.05,1.0);
        &:nth-of-type(2){
            width: 25px;
        }
        &:first-child{
            transform-origin: 0% 0%;
        }
        &:nth-last-child(3){
            transform-origin: 0% 100%;
        }
      }
      &.open{
          span{
            transform: rotate(45deg) translate(-2px, -1px);
            &:nth-last-child(2){
                opacity: 0;
                transform: rotate(0deg) scale(0.2, 0.2);
            }
            &:nth-last-child(1){
                transform: rotate(-45deg) translate(0, -1px);
            }
          }
      }
    }
`

const NavBarAreaRight = styled.div`
    background: transparent;
    position: absolute;
    width: calc(50% - 30px);
    height: 80px;
    top: 30px;
    left: 50%;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(60deg,
        #230F27,
        ${p => p.theme.colors.linear_hero_one} 
        );
    transition: 0.4s cubic-bezier(0.77,0.2,0.05,1.0);
    transform: translateX(-100%);
    &.open{
        transform: translateX(0%);
    }
    box-shadow: 3px 3px 10px -2px black;
`

const NavIcon = styled.div`
    width: 100px;
    margin: 0 50px;
    cursor: pointer;
    p{
        color: ${p => p.theme.colors.light};
        transition: .2s ease;
        opacity: 0;
        transform: translateY(-5px);
        transition-delay: .4s;
        &.open{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    
`

const NavBar = () => {

    const [navOpen, setNavOpen] = useState(false)
    const OpenNav = () => {
        setNavOpen(!navOpen)
    }

    return (
        <React.Fragment>
            <NavBarAreaLeft>
                <Logo>LOGO</Logo>
                <BurgerArea onClick={OpenNav}>
                    <div className={navOpen ? "open" : null}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </BurgerArea>
            </NavBarAreaLeft>

            <NavBarAreaRight className={navOpen ? "open" : null}>
                <NavIcon><p className={navOpen ? "open" : null}>Works</p></NavIcon>
                <NavIcon><p className={navOpen ? "open" : null}>About</p></NavIcon>
                <NavIcon><p className={navOpen ? "open" : null}>Contact</p></NavIcon>
            </NavBarAreaRight>
        </React.Fragment>
    )
}

export default NavBar
