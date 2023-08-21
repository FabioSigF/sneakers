import { clr, transition } from "../../../globalStyle";
import { styled } from "styled-components";

export const Wrapper = styled.div<{ menuopen: boolean }>`
  height: 14px;
  width: 18px;
  position: relative;

  div {
    top: 6px;
  }
  
  div,
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    background-color: ${clr.title};
    height: 2px;
    transition: ${transition.default};
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  ${props => props.menuopen && `
    div {
      opacity: 0;
    }

    &::after {
      transform: rotate3d(0,0,1,-45deg);
      bottom:7px;
    }
    &::before {
      transform: rotate3d(0,0,1,45deg);
      top:5px;
    }
  `}
`