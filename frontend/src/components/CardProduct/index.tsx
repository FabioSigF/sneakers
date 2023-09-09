//Axios
import axios from "axios";
//Styles
import * as S from "./styles";

//Icons
import { IoHeartOutline, IoImagesOutline } from "react-icons/io5";

//React Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Components
import AsideButton from "./AsideButton";
import AddButton from "./AddButton";

//Redux Hooks
import { useAppDispatch, useAppSelector } from "../../redux/store";

//Redux Actions
import { onToggle, setStates } from "../../redux/modal/quickView/slice";
import { addProduct, removeProduct } from "../../redux/wishList/slice";
import { selectProductAlreadyOnCart } from "../../redux/wishList/selectors";
import { Photo, ProductT } from "../../pages/Product";

type Props = {
  id: number;
};

const CardProduct = ({ id }: Props) => {
  const [product, setProduct] = useState<ProductT>();
  const [productPhotos, setProductPhotos] = useState<Photo[]>([]);

  const getProduct = async () => {
    await axios
      .get(`http://localhost:8800/products/item/${id}`)
      .then((response) => {
        setProduct(response.data);
        setProductPhotos([response.data.photos[0], response.data.photos[4]]);
      });
  };


  const dispatch = useAppDispatch();

  const productIsAlreadyInCart = useAppSelector(selectProductAlreadyOnCart(id));

  const navigate = useNavigate();

  const handleOnClick = (id: number) => {
    navigate(`/products/${id}`);
  };

  const handleAddToCart = (id: number) => {};

  const handleAddToWishList = () => {
    const data = {
      title: product?.description.model,
      price: product?.description.price,
      promotion: product?.description.promotion,
      id: id,
    };
    dispatch(addProduct(data));
  
  };

  const handleRemoveFromWishList = () => {
    dispatch(removeProduct(product?.description.id));
  
  };

  const handleQuickView = (
    title: string,
    rating: number,
    price: number,
    promotion: number,
    photos: Photo[]
  ) => {
    const data = {
      title: title,
      rating: rating,
      price: price,
      promotion: promotion,
      photos: photos,
    };
    dispatch(setStates(data));
    dispatch(onToggle({}));
  };

  useEffect(() => {
    getProduct();
  }, [handleRemoveFromWishList]);

  return (
    <>
      {product && (
        <S.Wrapper>
          <S.ImageContainer>
            {productPhotos &&
              productPhotos.map((item, key) => (
                <S.Image
                  key={key}
                  src={item.photo_link}
                  alt={product.description.model}
                  onClick={() => handleOnClick(id)}
                />
              ))}
            <S.SideButtons className="card_product__sideButtons">
              <div
                onClick={() => {
                  productIsAlreadyInCart
                    ? handleRemoveFromWishList()
                    : handleAddToWishList();
                }}
              >
                <AsideButton
                  Icon={IoHeartOutline}
                  active={productIsAlreadyInCart ? true : false}
                  title="Add to Wishlist"
                />
              </div>
              <div
                onClick={() =>
                  handleQuickView(
                    product.description.model,
                    5,
                    product.description.price,
                    product.description.promotion,
                    productPhotos
                  )
                }
              >
                <AsideButton Icon={IoImagesOutline} title="Quick view" />
              </div>
            </S.SideButtons>
          </S.ImageContainer>
          <S.Description>
            <S.Title onClick={() => handleOnClick(id)}>
              {product.description.p_type} {product.description.brand} {product.description.model}
            </S.Title>
            <S.TypeTag>{product.description.category}</S.TypeTag>
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
                </>
              ) : (
                <S.PriceMain>
                  R$ {product.description.price.toFixed(2)}
                </S.PriceMain>
              )}
            </S.Price>
          </S.Description>
        </S.Wrapper>
      )}
    </>
  );
};

export default CardProduct;
