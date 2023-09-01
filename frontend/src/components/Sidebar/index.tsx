import React from "react";
import * as S from "./styles";
import { IoClose } from "react-icons/io5";
type Props = {
  isOpen: boolean;
  onClose: () => void;
  header?: React.ReactElement;
  body?: React.ReactElement;
  footer?: React.ReactElement;
};

const Sidebar = ({
  isOpen,
  onClose,
  header,
  body,
  footer,
}: Props) => {
  return (
    <S.Wrapper className={`${isOpen && "active"}`}>
      <S.ButtonClose onClick={onClose}>
        <IoClose />
      </S.ButtonClose>
      <S.Box className="cart__container">
        {header && (
          <S.Header>
            {header}
          </S.Header>
        )}
        {body && (
          <S.Body>
            {body}
          </S.Body>
        )}
        {footer && (
          <S.Footer>
            {footer}
          </S.Footer>
        )}
      </S.Box>
    </S.Wrapper>
  );
};

export default Sidebar;
