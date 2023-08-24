import { styled } from "styled-components";
import { clr, transition } from "../../../globalStyle";

export const Wrapper = styled.div `
  background-color: ${clr.modalFadeBg};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  visibility: 0;
  transition: ${transition.default};

  &.active {
    opacity: 1;
    visibility: 1;
    z-index: 99;
  }
`