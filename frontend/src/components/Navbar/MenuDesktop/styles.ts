import { clr, ffamily, fsize, height, transition } from "../../../globalStyle";
import { styled } from "styled-components";

export const Wrapper = styled.div `
  width: 100%;
  position: relative;
`

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: ${height.navbarDesktop};
`

export const Col = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const Item = styled.li <{bgPrimary?: boolean}>`
  position: relative;
  background-color: ${props => props.bgPrimary ? clr.primaryLight : clr.grayBg};
  border-radius: 50%;
  color: ${clr.darkBg};
  cursor: pointer;
  font-size: ${fsize.iconSize};
  
  height: 50px;
  width: 50px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 100%;
  }
  transition: ${transition.default};
  
  &:hover {
    background-color: ${clr.grayBgDarker};
  }
`

export const PhoneCallContainer = styled.div `
  display: flex;
  align-items: center;
  gap: .5rem;
`

export const PhoneCall = styled.p `
  text-transform: uppercase;
  color: ${clr.darkBg};
  font-family: ${ffamily.title};
  font-size: ${fsize.small};
  font-weight: 600;
`