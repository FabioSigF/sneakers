import React from 'react'
import * as S from './styles'
type Props = {
  title: string;
  onClick: ()=>void;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

const AddButton = ({title, onClick, type}: Props) => {
  return (
    <S.Wrapper
      type={type ? type : "button"}
      onClick={onClick}
    >{title}</S.Wrapper>
  )
}

export default AddButton