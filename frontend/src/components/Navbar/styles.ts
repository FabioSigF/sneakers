import { clr, deviceSize, ffamily, fsize, height, transition } from "../../globalStyle";
import { styled } from "styled-components";

export const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${height.navbarMobile};
  background-color: ${clr.bodyBg};
  z-index: 9;

  display: flex;
  align-items: center;

  @media screen and (min-width: ${deviceSize.tablet}){
    height: auto;
  }
`

export const Main = styled.div`
  display: grid;
  grid-template-columns: .5fr 1fr .5fr;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media screen and (min-width: ${deviceSize.tablet}){
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const Col = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const Icon = styled.div`
  width: ${fsize.iconSize};
  height: ${fsize.iconSize};

  color: ${clr.darkBg};
`

