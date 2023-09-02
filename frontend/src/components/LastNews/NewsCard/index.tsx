import React from "react";
import * as S from "./styles";
import { BsCalendar2Event, BsPerson } from "react-icons/bs";
import Button from "../../Button";

interface Article {
  title: string;
  image: string;
  date: string;
  author: string;
  description: string;
  link: string;
}
type Props = {
  article: Article;
};

const NewsCard = ({ article }: Props) => {
  return (
    <S.Wrapper>
      <S.Image href={article.link}>
        <img src={article.image} alt={article.title} className="newsCard__image"/>
      </S.Image>
      <S.Description>
        <S.Data>
          <S.DataColumn>
            <BsCalendar2Event />
            {article.date}
          </S.DataColumn>
          <S.DataColumn>
            <BsPerson />
            {article.author}
          </S.DataColumn>
        </S.Data>
        <S.Title className="newsCard_title">{article.title}</S.Title>
        <S.Resume>{article.description}</S.Resume>
        <Button title="Read More" link={article.link}/>
      </S.Description>
    </S.Wrapper>
  );
};

export default NewsCard;
