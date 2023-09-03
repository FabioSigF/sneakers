import { clr, fsize } from "../../globalStyle";
import { styled } from "styled-components";

export const Wrapper = styled.div `
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Count = styled.div `
  background-color: ${clr.darkBg};
  border-radius: 50%;
  color: ${clr.whiteText};
  font-size: ${fsize.small};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;

  position: absolute;
  top: 50%;
  right: -5px;
`