import { createGlobalStyle } from "styled-components";

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
  darkBg: "#000",
  bodyBg: "#fff",
  grayBg: "#EDEDED",
};

export const fsize = {
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
};

export const height = {
  navbarMobile: "60px",
  navbarDesktop: "90px",
  section: "7rem",
  sectionHalf: "3.5rem"
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
`;
