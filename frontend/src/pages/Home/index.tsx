import React from 'react'
import Hero from '../../components/Hero'
import * as S from './styles'
type Props = {}

const Home = (props: Props) => {
  return (
    <S.Wrapper>
      <Hero />
    </S.Wrapper>
  )
}

export default Home