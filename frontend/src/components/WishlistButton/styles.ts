import { clr, fsize } from "../../globalStyle";
import { styled } from "styled-components";

export const Wrapper = styled.div `
  position: relative;
`

export const Count = styled.div `
  background-color: ${clr.primaryLight};
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