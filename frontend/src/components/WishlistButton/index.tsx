import React from "react";
import { IoHeartOutline } from "react-icons/io5";

import * as S from "./styles";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectProductsCount } from "../../redux/wishList/selectors";
import { useNavigate } from "react-router-dom";
type Props = {};

const WishlistButton = (props: Props) => {
  const productsCounter: number = useAppSelector(selectProductsCount);

  const navigate = useNavigate();

  return (
    <S.Wrapper onClick={() => navigate("/wishlist")}>
      <IoHeartOutline size={22} />
      <S.Count>{productsCounter}</S.Count>
    </S.Wrapper>
  );
};

export default WishlistButton;
