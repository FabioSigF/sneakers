import React, { useState, useEffect, useMemo } from "react";
import Hero from "../../components/Hero";
import * as S from "./styles";
import { Products } from "../../components/Products";
import axios from "axios";
import ShopAdvertise from "../../components/ShopAdvertise";

import advertiseImage01 from "../../images/banners/img-6-3_900x.webp";
import advertiseImage02 from "../../images/banners/img-6-4_900x.webp";
import advertiseImage03 from "../../images/banners/img-6-5_900x.webp";
import LastNews from "../../components/LastNews";
import DisplayBar from "../../components/DisplayBar";

import displayBrands01 from "../../images/display/m-1_150x.png";
import displayBrands02 from "../../images/display/m-2_150x.png";
import displayBrands03 from "../../images/display/m-3_150x.png";
import displayBrands04 from "../../images/display/m-4_150x.png";
import displayBrands05 from "../../images/display/m-5_150x.webp";
import displayBrands06 from "../../images/display/m-6_150x.png";

import displayPolicy01 from "../../images/display/policy/p-10_200x.png";
import displayPolicy02 from "../../images/display/policy/p-8_281c9970-8c95-4fd5-8905-02fb0785a530_200x.png";
import displayPolicy03 from "../../images/display/policy/p-12_200x.png";
import Button from "../../components/Button";
import Container from "../../components/Container";

type Props = {};

const Home = (props: Props) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios
        .get("http://localhost:8800/products")
        .then((response) => {
          setProducts(response.data.slice(0, 8));
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    console.log(products);
  }, []);

  const displayBrands = [
    {
      icon: displayBrands01,
    },
    {
      icon: displayBrands02,
    },
    {
      icon: displayBrands03,
    },
    {
      icon: displayBrands04,
    },
    {
      icon: displayBrands05,
    },
    {
      icon: displayBrands06,
    },
    {
      icon: displayBrands01,
    },
    {
      icon: displayBrands02,
    },
    {
      icon: displayBrands03,
    },
    {
      icon: displayBrands04,
    },
    {
      icon: displayBrands05,
    },
    {
      icon: displayBrands06,
    },
  ];

  const displayPolicy = [
    {
      title: "30 Days Return",
      text: "Simply return it within 30 days for an exchange",
      icon: displayPolicy01,
      small: true,
    },
    {
      title: "Free US delivery",
      text: "On orders over $200!",
      icon: displayPolicy02,
      small: true,
    },
    {
      title: "Support 24/7",
      text: "Contact us 24 hours a day, 7 days a week",
      icon: displayPolicy03,
      small: true,
    },
  ];
  return (
    <S.Wrapper>
      <Hero />
      <DisplayBar cardsData={displayBrands} slide />
      <S.Products>
        <Container>
          {products && <Products title="Recommended for you" list={products} />}
          <S.Button>
            <Button
              title="View all product"
              onClick={() => console.log("Clicou")}
              link="/products"
            />
          </S.Button>
        </Container>
      </S.Products>
      <S.Advertise>
        <ShopAdvertise
          title="Running Shoes"
          text="Our Mate men's running shoes are made to give you perfect balance and boost while out for a run"
          image={advertiseImage01}
          link="/#!"
          buttonTitle="Shop Now"
        />
        <ShopAdvertise
          title="Basketball Shoes"
          text="The best beginner rock climbing shoes for bouldering, gym and outdoor use"
          image={advertiseImage02}
          link="/#!"
          buttonTitle="Shop Now"
          reverse
        />
        <ShopAdvertise
          title="Casual Shoes"
          text="Our Mate men's running shoes are made to give you perfect balance and boost while out for a run"
          image={advertiseImage03}
          link="/#!"
          buttonTitle="Shop Now"
        />
      </S.Advertise>
      <LastNews />
      <DisplayBar cardsData={displayPolicy} />
    </S.Wrapper>
  );
};

export default Home;
