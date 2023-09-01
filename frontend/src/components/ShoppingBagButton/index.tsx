import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import * as S from "./styles";
import { useAppSelector } from "../../redux/store";

type Props = {};

const ShoppingBagButton = (props: Props) => {
  const { products } = useAppSelector((state) => state.cartReducer);

  return (
    <S.Wrapper>
      <IoBagHandleOutline size={22} />
      <S.Count>{products.length}</S.Count>
    </S.Wrapper>
  );
};

export default ShoppingBagButton;
