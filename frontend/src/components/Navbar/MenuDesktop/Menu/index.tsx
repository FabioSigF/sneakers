"use client";

import { useState } from 'react'
import { NavLink } from 'react-router-dom';

//Styles
import * as S from './styles'


type Props = {}

const Menu = (props: Props) => {

  const menuList = [
    {
      label: 'Home',
      link: '/',
      list: [],
      featured_products: [],
    },
    {
      label: 'Collection',
      link: '/collection',
      list: [
        {
          section_label: 'Collection Page',
          section_link: '/collection/page',
          section_list: [
            {
              label: 'Collection',
              link: '/collection/page/link'
            }
          ],
        },
        {
          section_label: 'Collection Page',
          section_link: '/collection/page',
          section_list: [
            {
              label: 'Collection',
              link: '/collection/page/link'
            }
          ],
        },
        {
          section_label: 'Collection Page',
          section_link: '/collection/page',
          section_list: [
            {
              label: 'Collection',
              link: '/collection/page/link'
            }
          ],
        },
      ],
      featured_products: [],
    },
    {
      label: 'Products',
      link: '/products',
      list: [
        {
          section_label: 'Products Page',
          section_link: '/product/page',
          section_list: [
            {
              label: 'Product',
              link: '/product/page/link'
            }
          ],
        },
        {
          section_label: 'Products Page',
          section_link: '/product/page',
          section_list: [
            {
              label: 'Product',
              link: '/product/page/link'
            }
          ],
        },
        {
          section_label: 'Products Page',
          section_link: '/product/page',
          section_list: [
            {
              label: 'Product',
              link: '/product/page/link'
            }
          ],
        },
      ],
      featured_products: [],
    },

  ]

  const [showDropdown, setShowDropdown] = useState(false);

  const [listContent, setListContent] = useState([menuList[1].list[0]]);

  return (
    <S.Wrapper>
      <S.List>

        {menuList.map((item, key) => (
          <S.Item
            key={key}
          >
            <NavLink
              to={item.link}
            >
              {item.label}
            </NavLink>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  )
}

export default Menu;