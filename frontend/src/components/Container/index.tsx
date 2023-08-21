import React from 'react'
import * as S from './styles';

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Container = ({children, style}: Props) => {
  return (
    <S.Wrapper style={style &&  style}>{children}</S.Wrapper>
  )
}

export default Container