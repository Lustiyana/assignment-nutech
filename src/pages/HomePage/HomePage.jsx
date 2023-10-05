import React from "react";
import { useEffect } from "react";
import ProfileDisplay from "../../components/ProfileDisplay/ProfileDisplay";
import PromoSlider from "../../components/PromoSlider/PromoSlider";
import SaldoInfo from "../../components/SaldoInfo/SaldoInfo";
import "../../index.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import ServiceList from "../../components/ServiceList/ServiceList";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="main-container">
      <div className="flex justify-between">
        <ProfileDisplay />
        <SaldoInfo />
      </div>
      <ServiceList />
      <PromoSlider />
    </div>
  );
};

export default HomePage;
