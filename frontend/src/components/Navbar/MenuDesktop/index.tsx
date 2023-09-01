import React from 'react'
import * as S from './styles'

//Icons
import { IoPersonOutline, IoSearchOutline } from 'react-icons/io5';
import { FaPhoneVolume } from 'react-icons/fa6';

//Components
import Hamburger from '../Hamburger';
import WishlistButton from '../../WishlistButton';
import Container from '../../Container';
import Logo from '../../Logo';
import ShoppingBagButton from '../../ShoppingBagButton';
import Menu from './Menu';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { AuthenticationModalSlice } from '../../../redux/modal/authentication/slice';
import { CartSlice } from '../../../redux/sidebar/cart/slice';

type Props = {}



const MenuDesktop = (props: Props) => {

  const { tablet } = useAppSelector(rootReducer => rootReducer.deviceTypeReducer);
  const dispatch = useAppDispatch();

  const handleOpenProfile = () => {
    dispatch(AuthenticationModalSlice.actions.onToggle({}));
  }

  const handleOpenCart = () => {
    dispatch(CartSlice.actions.onToggle({}));
  }
  return (
    <S.Wrapper>
      <Container style={{display: 'flex', flexDirection: 'column'}}>
          <S.Main>

            <S.Col style={{ justifyContent: 'flex-start' }}>
              {tablet && (
                <Hamburger />
              )}
              <S.PhoneCallContainer>
                <S.Item bgPrimary>
                  <a href="#!">
                    <FaPhoneVolume />
                  </a>
                </S.Item>
                <S.PhoneCall>Call us : 0123-456-7890</S.PhoneCall>
              </S.PhoneCallContainer>
            </S.Col>

            <S.Col style={{ justifyContent: 'center' }}>
              <Logo />
            </S.Col>

            <S.Col style={{ justifyContent: 'flex-end' }}>
              <S.Item>
                <a href="#!">
                  <IoSearchOutline />
                </a>
              </S.Item>
              <S.Item onClick={handleOpenProfile}>
                <a href="#!">
                  <IoPersonOutline />
                </a>
              </S.Item>
              <S.Item>
                <WishlistButton />
              </S.Item>
              <S.Item onClick={handleOpenCart}>
                <ShoppingBagButton />
              </S.Item>
            </S.Col>

          </S.Main>
          <Menu />
        </Container>
    </S.Wrapper>
  )
}

export default MenuDesktop