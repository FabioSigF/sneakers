import { createGlobalStyle, styled } from "styled-components";

export const iconsList = {
  rightChevron: "BiChevronRight",
  facebook: "FaFacebookF",
  twitter: "FaTwitter",
  instagram: "FaInstagram",
  pinterest: "FaPinterest",
  search: "IoSearchOutline",
  shoppingBag: "IoBagHandleOutline",
  phone: "FaPhoneVolume, fa6",
  person: "IoPersonOutline",
  heart: "IoHeartOutline",
  truckShipping: "LiaShippingFastSolid",
};

export const ffamily = {
  title: "'Oswald', sans-serif",
  text: "'Jost', sans-serif",
};

export const clr = {
  primary: "#0db22a",
  primaryLight: "#60ff00",
  title: "#222222",
  bodyText: "#505157",
  whiteText: "#fff",
  grayText: "#909090",
  productItem: "#d43131",
  transition: "all 0.45s cubic-bezier(0.29, 0.63, 0.44, 1)",
  price: "#232630",
  reducedPrice: "#b0b0b0",
  modalFadeBg: "rgba(0,0,0,0.5)",
  lightTransparency: "rgba(255,255,255,0.3)",
  darkBg: "#000",
  bodyBg: "#fff",
  grayBg: "#EDEDED",
  grayBgDarker: "#dadada",
  success: "#30b94d",
  error: "#d43131",
};

export const fsize = {
  xsmall: "0.625rem",
  small: "0.75rem", //12px
  normalSmaller: ".875rem", //14px
  normal: "1rem", //16px
  normalLarger: "1.125rem", //18px
  button: ".875rem",
  iconSizeSmall: "1.125rem", //18px
  iconSize: "1.375rem", //22px
  galleryTitle: "1.5rem", //24px
  titleSmall: "1.5rem",
  title: "1.875rem", //30px
  titleLarger: "2.1875rem", //35px
  bannerTitle: "4.5rem", //72px
};

export const transition = {
  default: "all 0.45s cubic-bezier(0.29, 0.63, 0.44, 1)",
  defaultLazy: "all 1.45s cubic-bezier(0.29, 0.63, 0.44, 1)",
};

export const height = {
  navbarMobile: "60px",
  navbarDesktop: "90px",
  section: "7rem",
  sectionHalf: "3.5rem",
};

export const deviceSize = {
  mobileS: "320px",
  mobileM: "425px",
  mobileL: "576px",
  tablet: "768px",
  laptopS: "992px",
  laptop: "1024px",
  laptopM: "1200px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const SectionTitle = styled.h3<{ textCenter?: boolean }>`
  text-align: ${(props) => (props.textCenter ? "center" : "start")};
  font-size: ${fsize.title};
  text-transform: uppercase;
  padding-bottom: ${height.sectionHalf};
`;

export const PageTitleContainer = styled.div<{ textLeft?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.textLeft ? "flex-start" : "center")};
  padding-bottom: ${height.section};
  h2 {
    font-size: ${fsize.title};
    text-transform: uppercase;
  }
`;

export const PageContainer = styled.div `
  padding-top: ${height.section};
  padding-bottom: ${height.section};
`

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    color: ${clr.bodyText};
    font-family: ${ffamily.text};
    font-size: ${fsize.normal};
    background-color: ${clr.bodyBg};
    margin: 0;
    padding: 0;
  }

  ul, 
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a, 
  button {
    cursor: pointer;
    transition: ${transition.default};
  }

  button {
    background: none;
    border: none;
  }

  h1, 
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${clr.title};
    font-family: ${ffamily.title};
  }

  button {
    font-family: ${ffamily.title};
  }

  label {
    font-weight: 700;
  }

  form {
    label {
      font-size: ${fsize.small};
    }
  }
  
  input {
    border: 1px solid ${clr.grayBg};
    padding: 0 20px;
    height: 50px;
    width: 100%;
    border-radius: 5px;
    font-size: ${fsize.small};
    font-weight: 400;

    &::placeholder {
      font-size: ${fsize.xsmall};
      font-family: ${ffamily.text};
      font-weight: 600;
      color: ${clr.grayText};
      text-transform: uppercase;
    }
  }
`;
