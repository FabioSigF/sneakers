import React from "react";
import * as S from "./styles";
import Container from "../Container";
import CardProduct from "../CardProduct";
import Button from "../Button";
import { SectionTitle } from "../../globalStyle";

type Props = {
  title: String;
  list: Product[];
};

interface Product {
  model: string;
  brand: string;
  price: number;
  p_type: string;
  gender: string;
  id: number;
  promotion: any;
  category: string;
}

const Products = ({ title, list }: Props) => {
  return (
    <S.Wrapper>
      <Container>
        <SectionTitle textCenter>{title}</SectionTitle>
        <S.List>
          {list &&
            list.map((item, key) => (
              <CardProduct
                key={key}
                id={item.id}
              />
            ))}
        </S.List>
        <S.Button>
          <Button
            title="View all product"
            onClick={() => console.log("Clicou")}
            link="/collections"
          />
        </S.Button>
      </Container>
    </S.Wrapper>
  );
};

export default Products;
