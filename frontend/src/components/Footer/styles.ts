import { styled } from "styled-components";
import { clr, fsize } from "../../globalStyle";

export const Wrapper = styled.section`
  background-color: ${clr.darkBg};
`;

export const Layout = styled.div`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr 1fr;
  gap: 2rem;
`;

export const Row = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h4`
  color: ${clr.whiteText};
  font-size: ${fsize.normalLarger};
  text-transform: uppercase;
`;

export const List = styled.ul`
  color: ${clr.whiteText};
  font-weight: 300;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      font-size: ${fsize.iconSize};
    }
  }

  a:hover {
    color: ${clr.primaryLight};
  }
`;

export const Description = styled.p`
  color: ${clr.whiteText};
`;

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  li {
    color: ${clr.whiteText};
    a:hover {
      color: ${clr.primaryLight};
    }
  }
`;
