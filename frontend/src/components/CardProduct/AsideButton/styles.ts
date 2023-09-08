import { styled } from "styled-components";
import { clr, fsize, transition } from "../../../globalStyle";

export const Wrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem;
  background-color: ${clr.bodyBg};
  color: ${clr.bodyText};
  font-size: ${fsize.iconSizeSmall};
  border-radius: 50%;
  box-shadow: 4px 4px 5px rgba(0,0,0,0.1);
  transition: ${transition.default};
  &:hover,
  &.active {
    background-color: ${clr.darkBg};
    color: ${clr.bodyBg};
  }
`