import React, { useState, useEffect, useMemo } from "react";
import Hero from "../../components/Hero";
import * as S from "./styles";
import Products from "../../components/Products";
import axios from "axios";
import ShopAdvertise from "../../components/ShopAdvertise";

import advertiseImage01 from '../../images/banners/img-6-3_900x.webp'
import advertiseImage02 from '../../images/banners/img-6-4_900x.webp'
import advertiseImage03 from '../../images/banners/img-6-5_900x.webp'
import LastNews from "../../components/LastNews";

type Props = {};

const Home = (props: Props) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios
        .get("http://localhost:8800/products")
        .then((response) => {
          setProducts(response.data.slice(0,8));
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    console.log(products);
  }, []);

  return (
    <S.Wrapper>
      <Hero />
      {products && <Products title="Recommended for you" list={products} />}
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
    </S.Wrapper>
  );
};

export default Home;
