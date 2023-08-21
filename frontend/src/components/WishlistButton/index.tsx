import React from 'react'
import { IoHeartOutline } from 'react-icons/io5'

import * as S from './styles'
type Props = {}

const WishlistButton = (props: Props) => {
  return (
    <S.Wrapper>
      <IoHeartOutline size={22} />
      <S.Count>
        0
      </S.Count>
    </S.Wrapper>
  )
}

export default WishlistButton