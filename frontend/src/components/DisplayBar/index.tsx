import React from "react";
import * as S from "./styles";
import { IconType } from "react-icons";
import DisplayItem from "./DisplayItem";
import Container from "../Container";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

export interface Card {
  title?: string;
  text?: string;
  icon: IconType | string;
  small?: boolean;
}

type Props = {
  cardsData: Card[];
  slide?: boolean;
};

function DisplayBar({ cardsData, slide }: Props) {
  return (
    <S.Wrapper>
      <Container>
        <S.List>
          {slide ? (
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {cardsData.map((item) => (
                <SwiperSlide>
                  <S.Item>
                    <DisplayItem cardData={item} />
                  </S.Item>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <>
              {cardsData.map((item) => (
                <S.Item>
                  <DisplayItem cardData={item} />
                </S.Item>
              ))}
            </>
          )}
        </S.List>
      </Container>
    </S.Wrapper>
  );
}

export default DisplayBar;
