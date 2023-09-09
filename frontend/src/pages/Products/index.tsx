import React, { useEffect, useState } from "react";

//Styles
import * as S from "./styles";
import { BreadCrumb, BreadCrumbList } from "../Product/styles";
//Components
import Container from "../../components/Container";
import { PageContainer, PageTitleContainer } from "../../globalStyle";
import { Products as ProductsList } from "../../components/Products";
//Axios
import axios from "axios";

type Props = {};

const Products = (props: Props) => {
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
    <PageContainer>
      <Container>
        <PageTitleContainer>
          <h2>Produtos</h2>
          <BreadCrumb>
            <BreadCrumbList>
              <li>
                <a href={"/"}>Home</a>
              </li>
              /<li>Produtos</li>
            </BreadCrumbList>
          </BreadCrumb>
        </PageTitleContainer>

        <S.Content>
          <S.Filter>
          </S.Filter>
          <ProductsList list={products} />
        </S.Content>
      </Container>
    </PageContainer>
  );
};

export default Products;
