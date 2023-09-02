import { keyframes, styled } from "styled-components";
import { clr, ffamily, fsize } from "../../../globalStyle";

const bouncing = keyframes`
  0% { transform: translateX(0); }
  15% { transform: translateX(-10px); }
  30% { transform: translateX(8px); }
  45% { transform: translateX(-6px); }
  60% { transform: translateX(4px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  &:hover {
    .displayItem_icon {
      animation: ${bouncing} 1s ease;
    }
  }
`;

export const Text = styled.p``;

export const Title = styled.span`
  font-family: ${ffamily.title};
  font-size: ${fsize.normalLarger};
  font-weight: 700;
  text-transform: uppercase;
  color: ${clr.title};
`;

export const Image = styled.div`
  &.small {
    svg {
      font-size: 30px;
    }
    img {
      width: auto;
      height: 30px;
    }
  }
`;
