import React from 'react'
import { Wrapper } from './styles'
import { NavLink } from 'react-router-dom'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Wrapper>
      <NavLink to="/">SNEAKERS</NavLink>
    </Wrapper>
  )
}

export default Logo