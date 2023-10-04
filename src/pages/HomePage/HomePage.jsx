import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProfileDisplay from "../../components/ProfileDisplay/ProfileDisplay";
import PromoSlider from "../../components/PromoSlider/PromoSlider";
import SaldoInfo from "../../components/SaldoInfo/SaldoInfo";
import "../../index.css";

const HomePage = () => {
  return (
    <div className="main-container">
      <div className="flex justify-between">
        <ProfileDisplay />
        <SaldoInfo />
      </div>
      <ProductList />
      <PromoSlider />
    </div>
  );
};

export default HomePage;
