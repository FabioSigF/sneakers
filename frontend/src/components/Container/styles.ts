
import { styled } from "styled-components";
import { deviceSize } from "../../globalStyle";

export const Wrapper = styled.div`
  box-sizing: border-box;
  padding-left: 6%;
  padding-right: 6%;
  width: 100%;
  
  @media screen and (min-width: ${deviceSize.mobileL}) {
    padding-left: 0;
    padding-right: 0;
    max-width: 540px;
    margin: 0 auto;
  }
  @media screen and (min-width: ${deviceSize.tablet}) {
    max-width: 720px;
  }
  @media screen and (min-width: ${deviceSize.laptop}) {
    max-width: 960px;
  }
  @media screen and (min-width: ${deviceSize.laptopM}) {
    max-width: 1140px;
  }
  @media screen and (min-width: ${deviceSize.laptopL}) {
    max-width: 1320px;
  }
`