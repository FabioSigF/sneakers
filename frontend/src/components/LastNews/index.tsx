import React from "react";
import * as S from "./styles";
import { SectionTitle } from "../../globalStyle";
import article01 from "../../images/news/3_783734c6-91e9-4f0d-8c49-d71d81000351_410x390_crop_center.webp";
import article02 from "../../images/news/2_12f10209-1dc0-4fcc-b008-ee05693df35d_410x390_crop_center.webp";
import article03 from "../../images/news/10_410x390_crop_center.webp";
import NewsCard from "./NewsCard";
import Container from "../Container";
type Props = {};

const LastNews = (props: Props) => {
  const data = [
    {
      title: "5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day",
      image: article01,
      date: "20 April 2023",
      author: "Vinova Theme",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi autem deleniti numquam rerum minus iste molestias nemo facilis ex, ullam expedita perferendis libero eligendi ipsa et! Voluptatum alias tempore maxime.",
      link: "#!",
      id: 0,
    },
    {
      title: "These cool graphic t-shirts have been designed for summer",
      image: article02,
      date: "20 April 2023",
      author: "Vinova Theme",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi autem deleniti numquam rerum minus iste molestias nemo facilis ex, ullam expedita perferendis libero eligendi ipsa et! Voluptatum alias tempore maxime.",
      link: "#!",
      id: 1,
    },
    {
      title:
        'How To Be "Good With Money" According To 4 Female Financial Experts ',
      image: article03,
      date: "20 April 2023",
      author: "Vinova Theme",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi autem deleniti numquam rerum minus iste molestias nemo facilis ex, ullam expedita perferendis libero eligendi ipsa et! Voluptatum alias tempore maxime.",
      link: "#!",
      id: 2,
    },
  ];

  return (
    <S.Wrapper>
      <Container>
        <SectionTitle>Last News</SectionTitle>
        <S.List>
          {data.map((item, key) => (
            <S.Item key={item.id}>
              <NewsCard article={item} />
            </S.Item>
          ))}
        </S.List>
      </Container>
    </S.Wrapper>
  );
};

export default LastNews;
