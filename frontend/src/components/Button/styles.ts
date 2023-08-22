import { styled } from "styled-components";
import { clr, ffamily, fsize, transition } from "../../globalStyle";

export const Wrapper = styled.a `
  padding: 0 40px;
  height: 56px;
  line-height: 56px;
  font-size: ${fsize.button};
  font-weight: 700;
  font-family: ${ffamily.title};
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 3px;
  transition: ${transition.default};
  width: initial;
  color: ${clr.title};
  background-color: ${clr.grayBg};
  display: inline-block;
  text-align: center;
  &:hover {
    color: ${clr.whiteText};
    background-color: ${clr.title};
  }

  &.dark__btn {
    color: ${clr.whiteText};
    background-color: ${clr.title};

    &:hover {
      color: ${clr.title};
      background-color: ${clr.primaryLight};
    }
  }
`