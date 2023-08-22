import { styled } from "styled-components";
import { clr, fsize, transition } from "../../globalStyle";

export const Wrapper = styled.div `
  position: relative;
  background: ${clr.bodyBg};
  width: 100%;
  height: 100%;
  max-width: 300px;
  cursor: pointer;
  overflow: hidden;
  padding-bottom: 1rem;
`
export const ImageContainer = styled.div `
  position: relative;
  width: 100%;
  height: auto;
  max-width: 300px;
  max-height: 300px;

  &:hover {

    .card_product__sideButtons {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }

    .card_product__addButton {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }
`
export const Image = styled.img `
  width: 100%;
  height: auto;
  display: block;
  transition: ${transition.default};

  &:nth-child(1){
    opacity: 1;
  }
  &:nth-child(2){
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  &:hover {
    &:nth-child(1){
      opacity: 0;
    }
    &:nth-child(2){
      opacity: 1;
    }
  }
`

export const Description = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`

export const Title = styled.h2 `
  font-size: ${fsize.normalLarger};

  &:hover {
    color: ${clr.primary};
  }
`

export const TypeTag = styled.div `

`

export const Price = styled.div `
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const PriceMain = styled.span `
  color: ${clr.price};
  font-size: ${fsize.normalSmaller};
  font-weight: 600;
`

export const PricePromotion = styled.span `
  color: ${clr.reducedPrice};
  text-decoration: line-through;
`

export const SideButtons = styled.div `
  position: absolute;
  top: 1rem;
  right: 1rem;
  opacity: 0;
  visibility: hidden;
  transform: translateX(.5rem);
  transition: ${transition.default};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 1;
`

export const AddButtonContainer = styled.div `
  position: absolute;
  width: calc(100% - 40px);
  left: 20px;
  bottom: .875rem;
  visibility: hidden;
  opacity: 0;
  z-index: 1;
  transform: translateY(.5rem);
  transition: ${transition.default};
`