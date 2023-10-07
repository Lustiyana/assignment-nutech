import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./BannerSlider.css";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../../redux/features/banners/action";

const BannerSlider = () => {
  const { banners } = useSelector((state) => state.banners);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBanners());
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

export default BannerSlider;
