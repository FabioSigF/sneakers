import { styled } from "styled-components";
import { clr, ffamily, fsize, transition } from "../../../globalStyle";

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Icon = styled.div`
  position: relative;
  font-size: ${fsize.title};
  width: 30px;
  height: 35px;
`;

export const IconCount = styled.div`
  position: absolute;
  content: "";
  display: block;
  background-color: ${clr.title};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: ${clr.primaryLight};
  top: -0.5rem;
  right: 0;
  text-align: center;
  font-size: small;
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
  max-height: 200px;
  overflow-y: auto;

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

export const Total = styled.div ``
