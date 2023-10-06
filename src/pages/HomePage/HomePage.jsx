import React from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import ServiceList from "../../components/ServiceList/ServiceList";
import InfoLayout from "../../layout/InfoLayout/InfoLayout";
import BannerSlider from "../../components/BannerSlider/BannerSlider";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <InfoLayout>
      <ServiceList />
      <BannerSlider />
    </InfoLayout>
  );
};

export default HomePage;
