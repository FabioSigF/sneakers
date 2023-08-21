import React from 'react';
import * as S from './styles';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { MobileHeaderSlice } from '../../../redux/mobileHeader/slice';
type Props = {}

const Hamburger = (props: Props) => {

  const { isOpen } = useAppSelector(rootReducer => rootReducer.mobileHeaderReducer);
  const dispatch = useAppDispatch();

  return (
    <S.Wrapper
      onClick={() => dispatch(MobileHeaderSlice.actions.onToggle({}))}
      menuopen={isOpen}
    >
      <div />
    </S.Wrapper>
  )
}

export default Hamburger