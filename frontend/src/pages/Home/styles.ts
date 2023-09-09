import { styled } from "styled-components";
import { height } from "../../globalStyle";

export const Wrapper = styled.div``;

export const Button = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  a {
    min-width: 215px;
  }
`

export const Products = styled.div `
  padding-top: ${height.section};
  padding-bottom: ${height.section};
`

export const Advertise = styled.section`
  height: 100%;
`;
