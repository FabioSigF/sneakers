import React from "react";
import { IoHeartOutline } from "react-icons/io5";

import * as S from "./styles";
import { useAppSelector } from "../../redux/store";
import { selectProductsCount } from "../../redux/wishList/selectors";
type Props = {};

const WishlistButton = (props: Props) => {
  const productsCounter: number = useAppSelector(selectProductsCount);
  return (
    <S.Wrapper>
      <IoHeartOutline size={22} />
      <S.Count>{productsCounter}</S.Count>
    </S.Wrapper>
  );
};

export default WishlistButton;
