import { styled } from "styled-components";
import { clr, ffamily, fsize, height, transition } from "../../globalStyle";

export const Wrapper = styled.main`
  padding-top: ${height.sectionHalf};
  padding-bottom: ${height.sectionHalf};
`;

export const BreadCrumb = styled.nav`
  margin-bottom: 2rem;
`;

export const BreadCrumbList = styled.ol`
  display: flex;
  align-items: center;
  gap: 1rem;

  li {
    font-size: ${fsize.small};
    a {
      &:hover {
        color: ${clr.primaryLight};
      }
    }
  }
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  img {
    max-width: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const Header = styled.div``;
export const Title = styled.h1`
  font-size: ${fsize.title};
`;
export const Category = styled.span`
  display: block;
`;
export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: ${fsize.normalLarger};
  font-family: ${ffamily.title};
`;
export const PriceMain = styled.span`
  color: ${clr.title};
  font-size: ${fsize.titleSmall};
  font-weight: 700;
`;
export const PricePromotion = styled.span`
  color: ${clr.grayText};
  text-decoration: line-through;
`;
export const PricePromotionDiscount = styled.span`
  color: ${clr.primary};
`;
export const ProductVersion = styled.div`
  border-color: rgb(17, 17, 17);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  width: 70px;
  height: 70px;
  img {
    width: 70px;
    height: auto;
  }
`;

export const ProductSize = styled.div``;
export const SectionTitle = styled.span`
  display: block;
  font-size: ${fsize.normalLarger};
  font-family: ${ffamily.title};
  padding-bottom: 1rem;
`;
export const SizeList = styled.ol`
  display: grid;
  grid-template-columns: repeat(4,1fr);
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

export const CardFlags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    color: ${clr.title};
    font-weight: 600;
    font-size: ${fsize.small};
    text-transform: uppercase;
  }

  img {
    max-width: 100%;
  }
`;

export const Tips = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Tip = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 500;
  font-size: ${fsize.normalSmaller};

  svg {
    font-size: ${fsize.iconSize};
  }
`;
