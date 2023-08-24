import React from "react";
import * as S from "./styles";
import { useAppSelector } from "../../../redux/store";

type Props = {};

const ModalFade = (props: Props) => {
  const { isOpen } = useAppSelector((state) => state.modalReducer);

  return <S.Wrapper className={`${isOpen && "active"}`}>ModalFade</S.Wrapper>;
};

export default ModalFade;
