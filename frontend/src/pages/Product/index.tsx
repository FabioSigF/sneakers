//React Hooks
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Axios
import axios from "axios";

//Styles
import * as S from "./styles";

//Components
import Container from "../../components/Container";
import Button from "../../components/Button";

//Icons
import { IoStarOutline } from "react-icons/io5";
import { LiaStopwatchSolid, LiaShippingFastSolid } from "react-icons/lia";
import { BsDash, BsPlus } from "react-icons/bs";

//Images
import cardsFlag from "../../images/product/payment-icon_700x.avif";

//Redux Hooks
import { useAppDispatch } from "../../redux/store";
//Redux Actions
import { addProduct } from "../../redux/cart/slice";

export type Photo = {
  id: number;
  photo_link: string;
};

export type ProductT = {
  description: ProductDescription;
  photos: Photo[];
};

export type ProductDescription = {
  brand: string;
  category: string;
  gender: string;
  id: number;
  model: string;
  p_type: string;
  price: number;
  promotion: number;
};

type Props = {};

const Product = (props: Props) => {
  const [product, setProduct] = useState<ProductT>();

  //Temporário até ser adicionado no DB
  const [productSize, setProductSize] = useState("35");

  const [productQuantity, setProductQuantity] = useState(1);

  const dispatch = useAppDispatch();
  //Obter o ID do produto
  const { id } = useParams();

  //Temporário até ser adicionado no DB
  const productSizeList = [
    {
      size: 35,
      avaible: true,
    },
    {
      size: 36,
      avaible: true,
    },
    {
      size: 37,
      avaible: true,
    },
    {
      size: 38,
      avaible: false,
    },
    {
      size: 39,
      avaible: true,
    },
    {
      size: 40,
      avaible: true,
    },
    {
      size: 41,
      avaible: true,
    },
    {
      size: 42,
      avaible: true,
    },
    {
      size: 43,
      avaible: false,
    },
    {
      size: 44,
      avaible: false,
    },
  ];

  //Pegar informaçõs do produto do DB
  const getProduct = async () => {
    await axios
      .get(`http://localhost:8800/products/item/${id}`)
      .then((response) => {
        setProduct(response.data);
      });
  };

  const handleChooseSize = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const button: HTMLButtonElement = e.currentTarget;
    setProductSize(button.name);
  };

  const handleAddProduct = () => {
    setProductQuantity(productQuantity + 1);
  };

  const handleRemoveProduct = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const handleAddProductToCart = () => {
    const productData = {
      title: `${product?.description.brand} ${product?.description.model}`,
      price: product?.description.promotion
        ? (
            product.description.price -
            (product.description.price * product.description.promotion) / 100
          ).toFixed(2)
        : product?.description.price,
      size: productSize,
      quantity: productQuantity,
      photo: product?.photos[0],
      id: product?.description.id,
    };
    dispatch(addProduct(productData));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <S.Wrapper>
      <Container>
        {product && (
          <>
            <S.BreadCrumb>
              <S.BreadCrumbList>
                {product.description.gender === "M" && (
                  <li>
                    <a href="/genero/masculino">Masculino</a>
                  </li>
                )}
                {product.description.gender === "F" && (
                  <li>
                    <a href="/genero/feminino">Feminino</a>
                  </li>
                )}
                {product.description.gender === "U" && (
                  <li>
                    <a href="/genero/unissex">Unissex</a>
                  </li>
                )}
                /
                <li>
                  <a href={`/categoria=?${product.description.category}`}>
                    {product.description.category}
                  </a>
                </li>
                /
                <li>
                  <a href={`/tipo=?${product.description.p_type}`}>
                    {product.description.p_type}
                  </a>
                </li>
                /<li>{product.description.model}</li>
              </S.BreadCrumbList>
            </S.BreadCrumb>
            <S.Product>
              <S.Gallery>
                {product.photos.map((item, key) => (
                  <img key={key} src={item.photo_link} alt="Product" />
                ))}
              </S.Gallery>
              <S.Description>
                <S.Header>
                  <S.Title>{product.description.model}</S.Title>
                  <S.Category>{product.description.category}</S.Category>
                </S.Header>
                <S.Rating>
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                </S.Rating>
                <S.Price>
                  {product.description.promotion ? (
                    <>
                      <S.PriceMain>
                        R${" "}
                        {(
                          product.description.price -
                          (product.description.price *
                            product.description.promotion) /
                            100
                        ).toFixed(2)}
                      </S.PriceMain>
                      <S.PricePromotion>
                        R$ {product.description.price.toFixed(2)}
                      </S.PricePromotion>
                      <S.PricePromotionDiscount>
                        {product.description.promotion}% off
                      </S.PricePromotionDiscount>
                    </>
                  ) : (
                    <S.PriceMain>
                      R$ {product.description.price.toFixed(2)}
                    </S.PriceMain>
                  )}
                </S.Price>
                <S.ProductVersion>
                  <img
                    src={product.photos[0].photo_link}
                    alt={product.description.model}
                  />
                </S.ProductVersion>
                <S.ProductSize>
                  <S.SectionTitle>Tamanho</S.SectionTitle>
                  <S.SizeList>
                    {productSizeList.map((item, key) => (
                      <S.SizeItem
                        key={key}
                        className={` 
                        ${item.avaible ? "" : "unavaible"}
                        ${productSize === item.size.toString() ? "active" : ""}
                        `}
                      >
                        <S.SizeButton
                          name={item.size.toString()}
                          onClick={handleChooseSize}
                        >
                          {item.size}
                        </S.SizeButton>
                      </S.SizeItem>
                    ))}
                  </S.SizeList>
                </S.ProductSize>
                <S.Buttons>
                  <S.SectionTitle>Quantidade</S.SectionTitle>
                  <S.ButtonsRow>
                    <S.Quantity>
                      <BsDash onClick={handleRemoveProduct} />
                      <S.QuantityCounter>{productQuantity}</S.QuantityCounter>
                      <BsPlus onClick={handleAddProduct} />
                    </S.Quantity>
                    <Button
                      title="Add to cart"
                      onClick={handleAddProductToCart}
                    />
                  </S.ButtonsRow>
                  <Button dark title="Buy it now" />
                </S.Buttons>
                <S.CardFlags>
                  <span>Guaranteed safe checkout:</span>
                  <img src={cardsFlag} alt="Cards we accept" />
                </S.CardFlags>
                <S.Tips>
                  <S.Tip>
                    <LiaStopwatchSolid />
                    <p>Orders ship within 5 to 10 business days.</p>
                  </S.Tip>
                  <S.Tip>
                    <LiaShippingFastSolid />
                    <p>Orders ship within 5 to 10 business days.</p>
                  </S.Tip>
                </S.Tips>
              </S.Description>
            </S.Product>
          </>
        )}
      </Container>
    </S.Wrapper>
  );
};

export default Product;
