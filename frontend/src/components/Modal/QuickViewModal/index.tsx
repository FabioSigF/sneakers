import { useState, useCallback } from "react";
import Modal from "..";
import * as S from "./styles";
import { IoStarOutline } from "react-icons/io5";
import { useAppSelector } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { QuickViewSlice } from "../../../redux/modal/quickView/slice";
import { BsDash, BsPlus } from "react-icons/bs";
import Button from "../../Button";

type Props = {};

interface Photo {
  id: number;
  photo_link: string;
}

const QuickViewModal = (props: Props) => {
  //Temporário até ser adicionado no DB
  const [productSize, setProductSize] = useState("35");
  
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const [quantityCounter, setQuantityCounter] = useState(1);
  
  const { title, rating, price, promotion, photos, isOpen } = useAppSelector(
    (state) => state.modalQuickViewReducer
  );

  const dispatch = useDispatch();

  const toggle = useCallback(() => {
    dispatch(QuickViewSlice.actions.onToggle({}));
  }, [dispatch]);

  const handleChoosePhoto = (id: number) => {
    setSelectedPhoto(id);
  }

  const handleAddProduct = () => {
    setQuantityCounter(quantityCounter + 1);
  }

  const handleRemoveProduct = () => {
    if(quantityCounter > 1) {
      setQuantityCounter(quantityCounter - 1);
    }
  }

  const handleChooseSize = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const button: HTMLButtonElement = e.currentTarget;
    setProductSize(button.name);
  };

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

  console.log(selectedPhoto);

  const bodyContent = (
    <S.BodyWrapper>
      {photos && photos.length > 0 && (
        <S.Image src={photos[selectedPhoto].photo_link} alt={title} />
      )}

      <S.Description>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.Rating>
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
          </S.Rating>
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
        </S.Header>
        <S.Gallery>
          {photos &&
            photos.length > 0 &&
            photos.map((item, key) => (
              <img 
                key={key} 
                alt="Product"
                src={item.photo_link} 
                onClick={()=>handleChoosePhoto(key)}
                className={`${selectedPhoto === key ? "active" : ""}`} 
              />
            ))}
        </S.Gallery>
        <S.ProductSize>
          <S.SectionTitle>Tamanho</S.SectionTitle>
          <S.SizeList>
            {productSizeList.map((item) => (
              <S.SizeItem
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
                      <S.QuantityCounter>{quantityCounter}</S.QuantityCounter>
                      <BsPlus onClick={handleAddProduct}/>
                    </S.Quantity>
                    <Button title="Add to cart" />
                  </S.ButtonsRow>
                  <Button dark title="Buy it now" />
                </S.Buttons>
      </S.Description>
    </S.BodyWrapper>
  );

  const handleSubmit = () => {};

  return (
    <Modal
      body={bodyContent}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={toggle}
    />
  );
};

export default QuickViewModal;
