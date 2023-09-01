import React, { useCallback, useEffect } from "react";
import * as S from "./styles";
import Sidebar from "..";
import { IoBagHandleOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { CartSlice } from "../../../redux/sidebar/cart/slice";
import Button from "../../Button";
import { BsDash, BsPlus, BsTrash } from "react-icons/bs";
type Props = {};

const Cart = (props: Props) => {
  
  const { isOpen, products } = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();

  console.log(products);
  const handleClose = useCallback(() => {
    dispatch(CartSlice.actions.onToggle({}));
  }, [dispatch]);

  const handleRemoveProduct = useCallback(
    (id: number, size: number) => {
      dispatch(
        CartSlice.actions.removeProduct({
          id: id,
          size: size,
        })
      );
    },
    [dispatch]
  );

  const handleIncreaseProduct = useCallback(
    (id: number, size: number) => {
      dispatch(
        CartSlice.actions.increaseProductQuantity({
          id: id,
          size: size,
        })
      );
    },
    [dispatch]
  );

  const handleDecreaseProduct = useCallback(
    (id: number, size: number) => {
      dispatch(
        CartSlice.actions.decreaseProductQuantity({
          id: id,
          size: size,
        })
      );
    },
    [dispatch]
  );
  
  const header = (
    <S.Header>
      <S.Icon>
        <IoBagHandleOutline />
        <S.IconCount>
          <span>{products.length}</span>
        </S.IconCount>
      </S.Icon>
      <S.Title>Cart</S.Title>
    </S.Header>
  );
  const body = (
    <S.Body>
      {products.length === 0 ? (
        <>
          <S.EmpityCartText>Your cart is currently empty.</S.EmpityCartText>
          <S.List>
            <S.Item>
              <Button title="Accessories" link="!#" />
            </S.Item>
            <S.Item>
              <Button title="Kid Shoes" link="!#" />
            </S.Item>
            <S.Item>
              <Button title="Running Shoes" link="!#" />
            </S.Item>
            <S.Item>
              <Button title="Sandals" link="!#" />
            </S.Item>
          </S.List>
        </>
      ) : (
        <>
          <S.ProductsList>
            {products.map((item, key) => (
              <S.ProductItem key={key}>
                <S.ProductLink>
                  <S.ProductImage
                    src={item.photo.photo_link}
                    alt={item.title}
                  />
                  <S.ProductDescription>
                    <S.ProductTitle className="card__product__title">
                      {item.title}
                    </S.ProductTitle>
                    <S.ProductSize>{item.size}</S.ProductSize>
                    <S.ProductPrice>R$ {item.price}</S.ProductPrice>
                    <S.ProductButtons>
                      <BsDash
                        onClick={() =>
                          handleDecreaseProduct(item.id, item.size)
                        }
                      />
                      {item.quantity}
                      <BsPlus
                        onClick={() =>
                          handleIncreaseProduct(item.id, item.size)
                        }
                      />
                      <S.IconRemoveProduct
                        onClick={() => handleRemoveProduct(item.id, item.size)}
                      >
                        <BsTrash />
                      </S.IconRemoveProduct>
                    </S.ProductButtons>
                  </S.ProductDescription>
                </S.ProductLink>
              </S.ProductItem>
            ))}
          </S.ProductsList>
          <S.Total>
            <span>Total</span>
            <p>{}</p>
          </S.Total>
        </>
      )}
    </S.Body>
  );
  return (
    <Sidebar
      onClose={handleClose}
      header={header}
      body={body}
      isOpen={isOpen}
    />
  );
};

export default Cart;
