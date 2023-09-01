import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  onClick?: () => void;
  link?: string;
  dark?: boolean;
  large?: boolean;
  disabled?: boolean;
};

const Button = ({ title, onClick, link, dark, large, disabled }: Props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
    if (link) {
      navigate(link);
    }
  };

  return (
    <S.Wrapper
      className={`${dark && "dark__btn"} ${large && "large__btn"} ${disabled && "disabled"}`}
      onClick={() => handleOnClick()}
    >
      {title}
    </S.Wrapper>
  );
};

export default Button;
