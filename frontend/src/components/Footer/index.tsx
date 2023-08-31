import React from "react";
import * as S from "./styles";
import Copyright from "./Copyright";
import Container from "../Container";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { IoCallOutline, IoMailOutline, IoTimeOutline } from "react-icons/io5";
import Newsletter from "../Newsletter";
type Props = {};

const Footer = (props: Props) => {
  return (
    <S.Wrapper>
      <Container>
        <S.Layout>
          <S.Row>
            <S.Title>Contact us</S.Title>
            <S.Description>
              Morbi ullamcorper ligula sit amet efficitur pellentesque.
              <br /> Aliquam ornare quam tellus ultricies molestie tortor.
            </S.Description>
            <S.List>
              <li>
                <IoCallOutline />
                <span>+0123 456 789</span>
              </li>
              <li>
                <IoMailOutline /> info@example.com
              </li>
              <li>
                <IoTimeOutline /> Monday till Friday 10 to 6 EST
              </li>
            </S.List>
          </S.Row>
          <S.Row>
            <S.Title>Help</S.Title>
            <S.List>
              <li>
                <a href="#!">Help Center</a>
              </li>
              <li>
                <a href="#!">Shipping Info</a>
              </li>
              <li>
                <a href="#!">Returns</a>
              </li>
              <li>
                <a href="#!">How To Order</a>
              </li>
              <li>
                <a href="#!">How To Track</a>
              </li>
              <li>
                <a href="#!">Size Guide</a>
              </li>
            </S.List>
          </S.Row>
          <S.Row>
            <S.Title>Company</S.Title>
            <S.List>
              <li>
                <a href="#!">About Us</a>
              </li>
              <li>
                <a href="#!">Our Blog</a>
              </li>
              <li>
                <a href="#!">Careers</a>
              </li>
              <li>
                <a href="#!">Store Locations</a>
              </li>
              <li>
                <a href="#!">Testimonial</a>
              </li>
              <li>
                <a href="#!">Sitemap</a>
              </li>
            </S.List>
          </S.Row>
          <S.Row>
            <S.Title>Newsletter</S.Title>
            <S.Description>
              Get 15% off your first purchaxse! Plus, be the first to know about
              sales new product launches and exclusive offers!
            </S.Description>
            <Newsletter />
            <S.SocialList>
              <li>
                <a href="#!">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#!">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#!">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#!">
                  <FaPinterestP />
                </a>
              </li>
            </S.SocialList>
          </S.Row>
        </S.Layout>
      </Container>
      <Copyright />
    </S.Wrapper>
  );
};

export default Footer;
