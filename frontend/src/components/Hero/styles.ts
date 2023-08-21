import { styled } from "styled-components";
import { clr, ffamily, fsize, height, transition } from "../../globalStyle";

export const Wrapper = styled.section`
`;

export const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  flex: 1;
  overflow: hidden;
  position: relative;
  transition: ${transition.default};
  &:hover {
    .hero__gallery__title {
      background-color: rgba(255,255,255,0.8);
      p {
        color: ${clr.darkBg}
      }
    }

    flex: 1.5;
  }
`;

export const ItemLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  height: ${`calc(100vh - ${height.navbarDesktop} - ${height.navbarMobile})`};

  img {
    height: 100%;
  }

`;

export const ItemTitle = styled.div`
  background-color: transparent;
  color: ${clr.bodyText};
  
  display: flex;
  align-items: flex-end;
  justify-content: end;
  width: 80px;
  height: 100%;
  padding: 20px;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  writing-mode: vertical-rl;

  transition: ${transition.default};
  p {
    display: block;
    color: ${clr.whiteText};
    font-weight: 800;
    font-size: ${fsize.galleryTitle};
    font-family: ${ffamily.title};
    text-transform: uppercase;
    transform: rotateZ(180deg);
  }
`;
