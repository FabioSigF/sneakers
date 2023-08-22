import React, { useState, useEffect, useMemo } from "react";
import Hero from "../../components/Hero";
import * as S from "./styles";
import Products from "../../components/Products";
import axios from "axios";
type Props = {};

const Home = (props: Props) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios
        .get("http://localhost:8800/products")
        .then((response) => {
          setProducts(response.data);
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
    </S.Wrapper>
  );
};

export default Home;
