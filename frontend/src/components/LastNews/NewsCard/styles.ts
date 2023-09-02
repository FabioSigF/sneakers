import { styled } from "styled-components";
import { clr, fsize, transition } from "../../../globalStyle";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &:hover {
    .newsCard__image {
      transform: scale(1.1);
    }
    .newsCard_title {
      color: ${clr.primary};
    }
  }
`;

export const Image = styled.a`
  overflow: hidden;
  font-size: 0;
  img {
    width: 100%;
    height: 100%;
    transition: ${transition.default};
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h5`
  font-size: ${fsize.normal};
  line-height: 1.5;
  transition: ${transition.default};
`;

export const Data = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const DataColumn = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  color: ${clr.grayText};
  font-size: ${fsize.small};
  text-transform: uppercase;
  font-weight: 500;
`;

export const Resume = styled.p``;
