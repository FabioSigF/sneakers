import React from "react";
import { NavLink } from "react-router-dom";
//Styles
import * as S from "./styles";

//Components
import Container from "../..//Container";

//Icons
import { BiChevronRight } from "react-icons/bi";
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

type Props = {
  showmenu: boolean;
};

const MenuMobile = ({ showmenu }: Props) => {
  return (
    <S.Wrapper showmenu={showmenu}>
      <Container style={{ height: "100%" }}>
        <S.Content>
          <S.List>
            <S.Item>
              <NavLink to={"/"}>Home {<BiChevronRight />}</NavLink>
            </S.Item>
            <S.Item>
              <NavLink to={"/collection"}>Collection {<BiChevronRight />}</NavLink>
            </S.Item>
            <S.Item>
              <NavLink to={"/products"}>Products {<BiChevronRight />}</NavLink>
            </S.Item>
            <S.Item>
              <NavLink to={"/login"}>Login {<BiChevronRight />}</NavLink>
            </S.Item>
          </S.List>
          <S.Social>
            <p>Call us: (017)-333-99999</p>
            <p>Email: support@domain.com</p>
            <S.SocialList>
              <li>
                <a href="#!">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#!">
                  <FaPinterestP />
                </a>
              </li>
              <li>
                <a href="#!">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#!">
                  <FaTwitter />
                </a>
              </li>
            </S.SocialList>
          </S.Social>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
};

export default MenuMobile;
