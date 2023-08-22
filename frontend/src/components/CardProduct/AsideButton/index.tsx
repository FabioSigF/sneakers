import React from "react";
import * as S from "./styles";
import { IconType } from "react-icons/lib";

type Props = {
  title: string;
  Icon: IconType;
};

const AsideButton = ({ Icon, title }: Props) => {
  return <S.Wrapper title={title}>
    <Icon />
  </S.Wrapper>;
};

export default AsideButton;
