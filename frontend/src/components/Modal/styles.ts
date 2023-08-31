import { styled } from "styled-components";
import { clr, fsize, transition } from "../../globalStyle";

export const Wrapper = styled.div `
  background-color: ${clr.modalFadeBg};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: -1;
  opacity: 0;
  visibility: 0;
  transition: ${transition.default};
  display: block;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {width: 0! important}
  -ms-overflow-style: none;
  overflow-y: -moz-scrollbars-none; 
  
  &.active {
    opacity: 1;
    visibility: 1;
    z-index: 99;
  }
`

export const CloseButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -35px;
  right: -50px;
  width: 48px;
  height: 48px;
  font-size: ${fsize.title};
  color: ${clr.whiteText};

  border-radius: 50%;
  transition: ${transition.default};
  z-index: 99;
  background: transparent;
  &:hover {
    background-color: ${clr.lightTransparency};
  }
`

export const ModalWrapper = styled.section `
  position: relative;
  background-color: ${clr.bodyBg};
  padding: 2.5rem;
  border-radius: 3px;
  margin: 3rem auto;
  width: min-content;
`

export const ModalContent = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`

export const Header = styled.header `

`

export const Body = styled.div `
  width: auto;
`

export const Footer = styled.div `
  display: flex;
  flex-direction: column;
`

