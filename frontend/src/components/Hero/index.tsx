import React from "react";
import * as S from "./styles";

//Hero Images
import heroItem01 from "../../images/hero/img-5-1.webp";
import heroItem02 from "../../images/hero/img-5-2.webp";
import heroItem03 from "../../images/hero/img-5-3.webp";
import heroItem04 from "../../images/hero/img-5-4.webp";

type Props = {};

const Hero = (props: Props) => {
  const galleryItems = [
    {
      id: 1,
      title: "Running",
      image: heroItem01,
      link: "#!" //Colocar link do search
    },
    {
      id: 2,
      title: "Climbing Shoes",
      image: heroItem02,
      link: "#!" //Colocar link do search
    },
    {
      id: 1,
      title: "Tennis Shoes",
      image: heroItem03,
      link: "#!" //Colocar link do search
    },
    {
      id: 1,
      title: "Basketball Shoes",
      image: heroItem04,
      link: "#!" //Colocar link do search
    },
  ];

  return (
    <S.Wrapper>
      <S.Grid>
        {galleryItems.map((item, key) => (
          <S.Item key={key}>
            <S.ItemLink href={item.link}>
              <img src={item.image} alt={item.title} />
            </S.ItemLink>
            <S.ItemTitle className="hero__gallery__title">
              <p>{item.title}</p>
            </S.ItemTitle>
          </S.Item>
        ))}
      </S.Grid>
    </S.Wrapper>
  );
};

export default Hero;
