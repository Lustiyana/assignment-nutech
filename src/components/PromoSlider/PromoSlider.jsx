import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./PromoSlider.css";
import { useDispatch, useSelector } from "react-redux";
import { GetBanners } from "../../redux/features/banners/action";

const PromoSlider = ({ data }) => {
  const { banners } = useSelector((state) => state.banners);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetBanners());
  }, []);
  return (
    <Swiper slidesPerView={"auto"}>
      {banners.data?.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.banner_image} alt={item.banner_name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PromoSlider;
