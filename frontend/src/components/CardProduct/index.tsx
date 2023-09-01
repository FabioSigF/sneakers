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
import { useAppDispatch } from "../../redux/store";

//Redux Actions
import { onToggle, setStates } from "../../redux/modal/quickView/slice";
import { addProduct } from "../../redux/wishList/slice";

type Props = {
  title: string;
  brand: string;
  price: number;
  p_type: string;
  gender: string;
  id: number;
  promotion: number;
  category: string;
};

interface CardImage {
  id: number;
  photo_link: string;
}

const CardProduct = ({
  title,
  brand,
  price,
  p_type,
  gender,
  id,
  promotion,
  category,
}: Props) => {
  const [productPhotos, setProductPhotos] = useState<CardImage[]>([]);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleProductPhotos = async () => {
    try {
      const res = await axios
        .get(`http://localhost:8800/products/${id}`)
        .then((response) => {
          setProductPhotos([response.data[0], response.data[4]]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnClick = (id: number) => {
    navigate(`/products/${id}`);
  };

  const handleAddToCart = (id: number) => {};

  const handleAddToWishList = () => {
    const data = {
      title: title,
      price: price,
      photo: productPhotos,
      id: id,
    };
    dispatch(addProduct(data));
  };

  const handleQuickView = (
    title: string,
    rating: number,
    price: number,
    promotion: number,
    photos: CardImage[]
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
    handleProductPhotos();
  }, [setProductPhotos]);

  return (
    <S.Wrapper>
      <S.ImageContainer>
        {productPhotos &&
          productPhotos.map((item, key) => (
            <S.Image
              key={key}
              src={item.photo_link}
              alt={title}
              onClick={() => handleOnClick(id)}
            />
          ))}
        <S.SideButtons className="card_product__sideButtons">
          <div onClick={() => handleAddToWishList()}>
            <AsideButton Icon={IoHeartOutline} title="Add to Wishlist" />
          </div>
          <div
            onClick={() =>
              handleQuickView(title, 5, price, promotion, productPhotos)
            }
          >
            <AsideButton Icon={IoImagesOutline} title="Quick view" />
          </div>
        </S.SideButtons>
        <S.AddButtonContainer className="card_product__addButton">
          <AddButton onClick={() => handleAddToCart(id)} title="Quick Add" />
        </S.AddButtonContainer>
      </S.ImageContainer>
      <S.Description>
        <S.Title onClick={() => handleOnClick(id)}>
          {p_type} {title}
        </S.Title>
        <S.TypeTag>{category}</S.TypeTag>
        <S.Price>
          {promotion ? (
            <>
              <S.PriceMain>
                R$ {(price - (price * promotion) / 100).toFixed(2)}
              </S.PriceMain>
              <S.PricePromotion>R$ {price.toFixed(2)}</S.PricePromotion>
            </>
          ) : (
            <S.PriceMain>R$ {price.toFixed(2)}</S.PriceMain>
          )}
        </S.Price>
      </S.Description>
    </S.Wrapper>
  );
};

export default CardProduct;
