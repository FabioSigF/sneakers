import { styled } from "styled-components";
import { clr, ffamily, fsize, transition } from "../../../globalStyle";

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.span`
  text-transform: uppercase;
  color: ${clr.title};
  font-weight: 700;
  font-family: ${ffamily.title};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmpityCartText = styled.p`
  padding-bottom: 2rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Item = styled.li``;

export const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 200px;
  overflow-y: auto;
  width: 100%;
  padding-bottom: 2rem;

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
`;

export const ProductItem = styled.li``;

export const ProductLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    .card__product__title {
      color: ${clr.primary};
    }
  }
`;

export const ProductImage = styled.img`
  width: 110px;
  height: auto;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProductTitle = styled.h3`
  font-size: ${fsize.normal};
  transition: ${transition.default};
`;

export const ProductSize = styled.span`
  font-size: ${fsize.small};
  font-weight: 500;
`;

export const ProductPrice = styled.span`
  font-family: ${ffamily.title};
  font-size: ${fsize.normalSmaller};
  font-weight: 700;
  color: ${clr.title};
`;

export const ProductButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: ${fsize.small};

  svg {
    font-size: ${fsize.normal};
    cursor: pointer;
  }
`;

export const IconRemoveProduct = styled.div`
  border-radius: 50%;
  background-color: ${clr.grayBg};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${fsize.normal};
  padding: 0.4rem;
  transition: ${transition.default};

  &:hover {
    background-color: ${clr.primaryLight};
    color: ${clr.whiteText};
  }
`;

export const Footer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  &::after {
    content: "";
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    height: 30px;
    background-color: transparent;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${clr.title};
  font-family: ${ffamily.title};
  font-size: ${fsize.normalSmaller};
  text-transform: uppercase;
  font-weight: 700;

  position: relative;
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${clr.grayBg};
    bottom: -.5rem;
    left: 0;
    right: 0;
  }
`;

export const Shipping = styled.div`
`;

export const ShippingTitle = styled.div`
  text-transform: uppercase;
  font-size: ${fsize.xsmall};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    font-size: ${fsize.iconSizeSmall};
  }

  &.active {
    color: ${clr.success};
  }
`;

export const ShippingBar = styled.div``;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
`;

export const AgreedTerms = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  cursor: pointer;
`;

export const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 1px solid #d0d0d0;
  margin-right: 10px;
  text-align: center;
  line-height: 18px;

  i {
    background-color: transparent;
    transition: ${transition.default};
    color: ${clr.whiteText};
  }

  &.active {
    i {
      background-color: ${clr.primaryLight};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
`;
