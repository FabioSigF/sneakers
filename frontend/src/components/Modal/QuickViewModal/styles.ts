import { styled } from "styled-components";
import { clr, ffamily, fsize, transition } from "../../../globalStyle";

export const BodyWrapper = styled.div `
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 3rem;
  position: relative;
  width: 75vw;
  max-height: 75vh;
  height: 445px;
`

export const Image = styled.img `
  width: 100%;
`

export const Description = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${clr.primary};
    border-radius: 20px;
    border: 7px solid ${clr.bodyBg};
  }
`

export const Header = styled.div `
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

export const Title = styled.h1`
  font-size: ${fsize.title};
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Price = styled.div `
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const PriceMain = styled.span `
  color: ${clr.price};
  font-size: ${fsize.normalLarger};
  font-weight: 600;
`

export const PricePromotion = styled.span `
  color: ${clr.reducedPrice};
  text-decoration: line-through;
`

export const SectionTitle = styled.span`
  display: block;
  font-size: ${fsize.normalLarger};
  font-family: ${ffamily.title};
  padding-bottom: 1rem;
`;

export const Gallery = styled.div`
  display: flex;
  gap: 1rem;
  img {
    border-color: transparent;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    width: 70px;
    height: 70px;
    transition: ${transition.default};
    &.active {
      border-color: rgb(17, 17, 17);
    }
  }
`;
export const ProductSize = styled.div``

export const SizeList = styled.ol`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  align-items: center;
  gap: .35rem;
`;
export const SizeItem = styled.li`
  text-align: center;
  border: 1px solid ${clr.grayBg};
  border-radius: 3px;
  background-color: ${clr.bodyBg};
  transition: ${transition.default};
  cursor: pointer;
  color: ${clr.title};
  &.active {
    background-color: ${clr.darkBg};
    color: ${clr.whiteText};
  }
  &:hover {
    border: 1px solid ${clr.title};
  }
`;
export const SizeButton = styled.button`
    padding: 0 28px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: ${fsize.small};
    font-weight: 700;
    text-transform: uppercase;
    color: inherit;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding-bottom: 1rem;
`;

export const Quantity = styled.div`
  border: 1px solid ${clr.grayBg};
  position: relative;
  font-size: ${fsize.normal};
  color: ${clr.title};
  margin-right: 10px;
  overflow: hidden;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem;

  height: 100%;

  svg {
    display: block;
    cursor: pointer;
  }
`;
export const QuantityCounter = styled.span``;