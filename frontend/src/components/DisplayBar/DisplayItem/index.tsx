import React from "react";
import * as S from "./styles";
import { Card } from "..";

type Props = {
  cardData: Card;
};

const DisplayItem = ({ cardData }: Props) => {
  return (
    <S.Wrapper>
      <S.Image className={`${cardData.small && "small"} displayItem_icon`}>
        {typeof cardData.icon === "string" ? (
          <img src={cardData.icon} alt={cardData.title} />
        ) : (
          <><cardData.icon/></>
        )}
      </S.Image>
      {cardData.title && <S.Title>{cardData.title}</S.Title>}
      {cardData.text && <S.Text>{cardData.text}</S.Text>}
    </S.Wrapper>
  );
};

export default DisplayItem;
