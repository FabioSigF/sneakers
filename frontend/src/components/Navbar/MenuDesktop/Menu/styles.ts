import { clr, ffamily, fsize, height, transition } from "../../../../globalStyle";
import { styled } from "styled-components";

export const Wrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: ${height.navbarDesktop};
  left: 0;
  right: 0;
  width: 100%;
`

export const List = styled.ul `
  display: flex;
`

export const Item = styled.li `
  a {
    color: ${clr.grayText};
    display: block;
    font-family: ${ffamily.title};
    font-size: ${fsize.normalSmaller};
    font-weight: 600;
    text-transform: uppercase;
    padding: 20px 22px;
    &.active,
    &:hover {
      color: ${clr.darkBg};
    }
  }
`