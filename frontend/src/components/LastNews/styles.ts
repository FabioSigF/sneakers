import { styled } from "styled-components";
import { height } from "../../globalStyle";

export const Wrapper = styled.section `
  width: 100%;
  padding-top: ${height.section};
  padding-bottom: ${height.sectionHalf};
`

export const List = styled.ul `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

export const Item = styled.li ``