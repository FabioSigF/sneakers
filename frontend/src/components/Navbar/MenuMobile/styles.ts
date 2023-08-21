import { clr, deviceSize, ffamily, fsize, height, transition } from "../../../globalStyle";
import { styled } from "styled-components";

export const Wrapper = styled.div <{ showmenu: boolean }>`
  background-color: ${clr.bodyBg};
  position: fixed;
  top: ${height.navbarMobile};
  left: 0;
  height: ${`calc(100vh - ${height.navbarMobile})`};
  width: 100%;
  
  transition: ${transition.default};
  transform: translateX(-120%);
  z-index: 999;
  padding-bottom: 1.5rem;

  -webkit-box-shadow: 10px 15px 15px -10px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 15px 15px -10px rgba(0,0,0,0.75);
  box-shadow: 10px 15px 15px -10px rgba(0,0,0,0.75);

  ${props => props.showmenu && `
    transform: translateX(0px);
  `}

  @media screen and (min-width: ${deviceSize.tablet}){
    top: ${height.navbarDesktop};
    height: ${`calc(100vh - ${height.navbarDesktop})`};
  }
`

export const Content = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`


export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`

export const Item = styled.li`
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: ${fsize.normalSmaller};
    font-family: ${ffamily.title};
    font-weight: 600;
    text-transform: uppercase;

    padding: 1rem 0;
  }
`

export const Social = styled.div `  
  font-size: ${fsize.normalSmaller};
`

export const SocialList = styled.ul `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  li a {
    background-color: ${clr.darkBg};
    border-radius: 50%;
    color: ${clr.bodyBg};
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`