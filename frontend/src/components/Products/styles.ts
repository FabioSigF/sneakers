import { styled } from "styled-components";
import { height } from "../../globalStyle";

export const Wrapper = styled.section`
  padding-top: ${height.section};
  padding-bottom: ${height.section};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
`;

export const Item = styled.li``;

export const Button = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  a {
    min-width: 215px;
  }
`