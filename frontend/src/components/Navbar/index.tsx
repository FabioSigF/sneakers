"use client";
import React from 'react'

//Styles
import * as S from './styles'

//Icons
import { IoSearchOutline } from 'react-icons/io5';

//Components
import Logo from '../Logo'
import Container from '../Container';
import MenuMobile from './MenuMobile';
import ShoppingBagButton from '../ShoppingBagButton';
import MenuDesktop from './MenuDesktop';
import Hamburger from './Hamburger';
import { useAppSelector } from '../../redux/store';

type Props = {}

const Navbar = (props: Props) => {

  const {isOpen} = useAppSelector(rootReducer => rootReducer.mobileHeaderReducer);

  const { mobile, tablet, laptop } = useAppSelector(rootReducer => rootReducer.deviceTypeReducer);

  return (
    <S.Wrapper>
      {mobile && (
        <Container>
          <S.Main>
            <S.Col style={{ justifyContent: 'flex-start' }}>
              <Hamburger />
              <S.Icon >
                <IoSearchOutline size={22} />
              </S.Icon>
            </S.Col>
            <S.Col style={{ justifyContent: 'center' }}>
              <Logo />
            </S.Col>
            <S.Col style={{ justifyContent: 'flex-end' }}>
              <S.Icon>
                <ShoppingBagButton />
              </S.Icon>
            </S.Col>
          </S.Main>
        </Container>
      )}

      {(mobile || tablet) && (
        <MenuMobile
          showmenu={isOpen}
        />
      )}

      {(tablet || laptop) && (
        <MenuDesktop />
      )}

    </S.Wrapper>
  )
}

export default Navbar