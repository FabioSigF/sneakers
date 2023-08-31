import React, { useCallback } from "react";
import * as S from "./styles";
import { IoClose } from "react-icons/io5";
import Button from "../Button";

type Props = {
  header?: React.ReactElement;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  footerActionLabel?: string;
  onSubmit?: () => void;
  onClose: () => void;
  isOpen: boolean;
};

const Modal = ({
  header,
  body,
  footer,
  onSubmit,
  footerActionLabel,
  isOpen,
  onClose,
}: Props) => {



  const handleClose = useCallback(() => {
    if (!isOpen) {
      return;
    }

    onClose();
  }, [isOpen, onClose]);

  const handleSubmit = useCallback(() => {
    if (!isOpen) {
      return;
    }
    if (onSubmit) {
      onSubmit();
    }
  }, [isOpen, onSubmit]);



  return (
    <S.Wrapper className={`${isOpen && "active"}`}>
      <S.ModalWrapper>
        <S.CloseButton onClick={handleClose}>
          <IoClose />
        </S.CloseButton>
        <S.ModalContent>
          {header && <S.Header>{header}</S.Header>}
          <S.Body>{body}</S.Body>

          {footerActionLabel && (
            <S.Footer>
              {footer}
              <Button
                title={footerActionLabel || "Modal Title"}
                onClick={handleSubmit}
                dark
              />
            </S.Footer>
          )}
        </S.ModalContent>
      </S.ModalWrapper>
    </S.Wrapper>
  );
};

export default Modal;
