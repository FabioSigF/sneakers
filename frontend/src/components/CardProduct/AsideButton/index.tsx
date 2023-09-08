import React from "react";
import * as S from "./styles";
import { IconType } from "react-icons/lib";

type Props = {
  title: string;
  Icon: IconType;
  active?: boolean;
};

const AsideButton = ({ Icon, title, active }: Props) => {
  return <S.Wrapper 
    className={`${active && "active"}`}
  title={title}>
    <Icon />
  </S.Wrapper>;
};

export default AsideButton;
