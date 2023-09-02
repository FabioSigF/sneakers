import React from "react";
import * as S from "./styles";
import Button from "../Button";

type Props = {
  title: string;
  text: string;
  link: string;
  image: string;
  buttonTitle: string;
  reverse?: boolean;
};

const ShopAdvertise = ({
  title,
  text,
  link,
  image,
  reverse,
  buttonTitle,
}: Props) => {
  return (
    <S.Wrapper>
      {reverse ? (
        <>
          <S.Description>
            <S.Title>{title}</S.Title>
            <S.Text>{text}</S.Text>
            <Button title={buttonTitle} link={link} dark />
          </S.Description>
          <S.Image>
            <img src={image} alt={title} />
          </S.Image>
        </>
      ) : (
        <>
          <S.Image>
            <img src={image} alt={title} />
          </S.Image>
          <S.Description>
            <S.Title>{title}</S.Title>
            <S.Text>{text}</S.Text>
            <Button title={buttonTitle} link={link} dark />
          </S.Description>
        </>
      )}
    </S.Wrapper>
  );
};

export default ShopAdvertise;
