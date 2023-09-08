import React, { useEffect, useMemo, useState } from "react";
import * as S from "./styles";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import axios from "axios";
import CardProduct from "../../components/CardProduct";
import Container from "../../components/Container";
import { SectionTitle } from "../../globalStyle";
type Props = {};

export type Photo = {
  id: number;
  photo_link: string;
};

export type Product = {
  brand: string;
  category: string;
  gender: string;
  id: number;
  model: string;
  p_type: string;
  price: number;
  promotion: number;
};

const Search = (props: Props) => {
  const { search } = useLocation();
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const searchString = query.get("q");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios
        .get("http://localhost:8800/products")
        .then((response) => {
          setSearchedProducts([]);
          response.data.forEach((product: Product) => {
            if (product.model && product.brand) {
              console.log(query.get("q"));
              if (searchString !== null) {
                if (
                  product.model
                    .toLowerCase()
                    .includes(searchString.toLowerCase()) ||
                  product.brand
                    .toLowerCase()
                    .includes(searchString.toLowerCase())
                ) {
                  setSearchedProducts((current) => [...current, product]);
                  console.log(searchedProducts);
                }
              }
            }
          });
        });
    };
    console.log(searchedProducts);
    fetchProducts();
  }, [searchString]);

  return (
    <S.Wrapper>
      <Container>
        {searchedProducts.length > 0 ? (
          <>
            <S.Title>
              Resultados para "{searchString}"({searchedProducts.length}):{" "}
            </S.Title>
            <S.List>
              {searchedProducts.map((item) => (
                <CardProduct id={item.id} />
              ))}
            </S.List>
          </>
        ) : (
          <S.SearchNotFounded>
            <span>
              Não encontramos nenhum resultado para "{searchString}". Realize
              uma nova busca!
            </span>
          </S.SearchNotFounded>
        )}
      </Container>
    </S.Wrapper>
  );
};

export default Search;
