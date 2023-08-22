import axios from "axios";
import React, { useState, useEffect } from "react";
import * as S from "./styles";
import AsideButton from "./AsideButton";
import { IoHeartOutline, IoImagesOutline } from "react-icons/io5";
import AddButton from "./AddButton";

type Props = {
  title: string;
  brand: string;
  price: number;
  p_type: string;
  gender: string;
  id: number;
  promotion: number;
  category: string;
};

interface CardImage {
  id: number;
  photo_link: string;
}

const CardProduct = ({
  title,
  brand,
  price,
  p_type,
  gender,
  id,
  promotion,
  category,
}: Props) => {
  const [productPhotos, setProductPhotos] = useState<CardImage[]>([]);

  const handleProductPhotos = async () => {
    try {
      const res = await axios
        .get(`http://localhost:8800/products/${id}`)
        .then((response) => {
          setProductPhotos([response.data[0], response.data[4]]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleProductPhotos();
  }, [setProductPhotos]);

  return (
    <S.Wrapper>
      <S.ImageContainer>
        {productPhotos &&
          productPhotos.map((item, key) => (
            <S.Image key={key} src={item.photo_link} alt={title} />
          ))}
        <S.SideButtons className="card_product__sideButtons">
          <AsideButton Icon={IoHeartOutline} title="Add to Wishlist" />
          <AsideButton Icon={IoImagesOutline} title="Quick view" />
        </S.SideButtons>
        <S.AddButtonContainer className="card_product__addButton">
          <AddButton onClick={() => {}} title="Quick Add" />
        </S.AddButtonContainer>
      </S.ImageContainer>
      <S.Description>
        <S.Title>
          {p_type} {title}
        </S.Title>
        <S.TypeTag>{category}</S.TypeTag>
        <S.Price>
          {promotion ? (
            <>
              <S.PriceMain>
                R$ {(price - (price * promotion) / 100).toFixed(2)}
              </S.PriceMain>
              <S.PricePromotion>R$ {price.toFixed(2)}</S.PricePromotion>
            </>
          ) : (
            <S.PriceMain>R$ {price.toFixed(2)}</S.PriceMain>
          )}
        </S.Price>
      </S.Description>
    </S.Wrapper>
  );
};

export default CardProduct;
