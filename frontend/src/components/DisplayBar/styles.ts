import { styled } from "styled-components";
import { clr, height } from "../../globalStyle";

export const Wrapper = styled.section`
  background-color: ${clr.grayBg};
  padding-top: ${height.section};
  padding-bottom: ${height.section};
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Item = styled.li``;
