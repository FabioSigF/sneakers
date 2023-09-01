//React Hooks
import { useCallback, useState } from "react";

//Styles
import * as S from "./styles";

//Components
import Sidebar from "..";
import Button from "../../Button";

//Icons
import { IoCheckmark } from "react-icons/io5";
import { BsDash, BsPlus, BsTrash } from "react-icons/bs";

//Redux Hooks
import { useAppDispatch, useAppSelector } from "../../../redux/store";
//Redux Actions
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  onToggle,
  removeProduct,
} from "../../../redux/cart/slice";
//Redux Selectors
import {
  selectProductsCount,
  selectProductsTotalPrice,
} from "../../../redux/cart/selectors";
import { LiaShippingFastSolid } from "react-icons/lia";
import ShoppingBagButton from "../../ShoppingBagButton";

type Props = {};

const Cart = (props: Props) => {
  const [termsAgreed, setTermsAgreed] = useState(false);
  //Redux Cart States
  const { isOpen, products } = useAppSelector((state) => state.cart);
  const productsTotalPrice: number = useAppSelector(selectProductsTotalPrice);
  const productsQuantity: number = useAppSelector(selectProductsCount);
  const dispatch = useAppDispatch();

  //Close Sidebar
  const handleClose = useCallback(() => {
    dispatch(onToggle({}));
  }, [dispatch]);

  //Products Functions
  const handleRemoveProduct = useCallback(
    (id: number, size: number) => {
      dispatch(
        removeProduct({
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
        increaseProductQuantity({
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
        decreaseProductQuantity({
          id: id,
          size: size,
        })
      );
    },
    [dispatch]
  );

  const header = (
    <S.Header>
      <ShoppingBagButton />
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
          <S.Footer>
            <S.Total>
              <span>Total</span>
              <p>R$ {productsTotalPrice}</p>
            </S.Total>
            <S.Shipping>
              {productsTotalPrice < 200 ? (
                <>
                  <S.ShippingTitle>
                    <span>
                      Spend ${(200 - productsTotalPrice).toFixed(2)} for free
                      shipping
                    </span>
                  </S.ShippingTitle>
                </>
              ) : (
                <>
                  <S.ShippingTitle className="active">
                    <span>Congratulations! You've got free shipping!</span>
                    <LiaShippingFastSolid />
                  </S.ShippingTitle>
                </>
              )}
            </S.Shipping>
            <S.Buttons>
              <Button title="View cart" large />
              {termsAgreed ? (
                <Button title="Check out" dark large />
              ) : (
                <Button title="Check out" dark large disabled />
              )}
              <S.AgreedTerms>
                <S.Checkbox
                  onClick={() => setTermsAgreed(!termsAgreed)}
                  className={`${termsAgreed && "active"}`}
                >
                  <i>{termsAgreed && <IoCheckmark />}</i>
                </S.Checkbox>
                I agree with Terms & conditions
              </S.AgreedTerms>
            </S.Buttons>
          </S.Footer>
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
