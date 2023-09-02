import { styled } from "styled-components";
import { clr, fsize, transition } from "../../globalStyle";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: auto;
  position: relative;
`;

export const Image = styled.div`
  overflow: hidden;
  font-size: 0;
  img {
    width: 100%;
    height: 100%;
    transition: ${transition.defaultLazy};
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const Description = styled.div`
  background-color: ${clr.grayBg};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  padding: 15%;
`;

export const Title = styled.h3`
  color: ${clr.grayText};
  text-transform: uppercase;
  font-size: ${fsize.titleSmall};
  font-weight: 700;
`;

export const Text = styled.p`
  display: block;
  color: ${clr.title};
  font-size: ${fsize.titleSmall};
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 1rem;
`;
