import { styled } from "styled-components";
import { clr, fsize, transition } from "../../globalStyle";

export const Wrapper = styled.div`
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

  &::-webkit-scrollbar {
    width: 0 !important;
  }
  -ms-overflow-style: none;
  overflow-y: -moz-scrollbars-none;

  &.active {
    opacity: 1;
    visibility: 1;
    z-index: 99;

    .cart__container {
      transform: translateX(0);
    }
  }
`;

export const ButtonClose = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  font-size: ${fsize.title};
  color: ${clr.title};

  width: 30px;
  height: 30px;
  z-index: 99;

  svg {
    transform: rotate(0);
    transition: ${transition.default};
  }
  &:hover {
    svg {
      transform: rotate(180deg);
    }
  }
`;

export const Box = styled.aside`
  position: relative;
  margin-left: auto;
  width: 369px;
  height: 100vh;
  background-color: ${clr.bodyBg};
  border-left: 1px solid ${clr.grayBg};
  transition: ${transition.default};
  transform: translateX(80%);
`;

export const Header = styled.header`
  padding: 1.5rem;
  border-bottom: 1px solid ${clr.grayBg};
`;

export const Body = styled.main`
  padding: 1.5rem;
`;

export const Footer = styled.div`
  padding: 1.5rem 1rem;
`;
