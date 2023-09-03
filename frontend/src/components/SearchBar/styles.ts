import { clr, fsize, transition } from "../../globalStyle";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background-color: ${clr.grayBg};
  border-radius: 50%;
  color: ${clr.darkBg};
  cursor: pointer;
  font-size: ${fsize.iconSizeSmall};
  overflow: hidden;
  height: 50px;
  width: 50px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  transition: ${transition.default};
  &:hover {
    background-color: ${clr.grayBgDarker};
  }

  .searchBar__icon {
    position: relative;
  }
  &.isOpen {
    width: 100%;
    border-radius: 20px;
    background-color: ${clr.bodyBg};
    border: 1px solid ${clr.grayBg};
    .searchBar__icon {
      left: 1rem;
      z-index: 1;
    }
  }
`;

export const Input = styled.input `
  padding: 0 1rem 0 2rem;
  width: 100%; 
  height: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  color: ${clr.bodyText};
`
