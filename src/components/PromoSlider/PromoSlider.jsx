import { promo } from "../../data/promo";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./PromoSlider.css";

const PromoSlider = () => {
  return (
    <Swiper slidesPerView={"auto"}>
      {promo.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item} alt={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PromoSlider;
