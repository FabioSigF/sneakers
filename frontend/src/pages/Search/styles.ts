import { styled } from "styled-components";
import { clr, fsize, height } from "../../globalStyle";

export const Wrapper = styled.div `
  min-height: 80vh;
  padding-top: ${height.sectionHalf};
  padding-bottom: ${height.section};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  width: 100%;
`;

export const Title = styled.h3 `
  color: ${clr.title};
  font-size: ${fsize.titleSmall};
  font-weight: 500;
  padding-bottom: 2rem;
`

export const SearchNotFounded = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;

  span {
    color: ${clr.title};
    font-size: ${fsize.titleSmall};
  }
`