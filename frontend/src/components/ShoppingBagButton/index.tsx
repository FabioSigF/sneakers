import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import * as S from './styles'

type Props = {}

const ShoppingBagButton = (props: Props) => {

  return (
    <S.Wrapper>
      <IoBagHandleOutline size={22} />
      <S.Count>
        0
      </S.Count>
    </S.Wrapper>
  )
}

export default ShoppingBagButton;