import { styled } from "styled-components";
import { clr, fsize, transition } from "../../../globalStyle";

export const Wrapper = styled.button `
  background-color: ${clr.grayBg};
  padding-top: .875rem;
  padding-bottom: .875rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fsize.small};
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 50px;
  transition: ${transition.default};

  &:hover {
    background-color: ${clr.darkBg};
    color: ${clr.whiteText};
  }
`