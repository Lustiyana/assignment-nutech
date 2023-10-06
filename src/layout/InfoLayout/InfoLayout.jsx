import React from "react";
import ProfileDisplay from "../../components/ProfileDisplay/ProfileDisplay";
import BalanceInfo from "../../components/BalanceInfo/BalanceInfo";

const InfoLayout = ({ children }) => {
  return (
    <div className="main-container">
      <div className="flex justify-between">
        <ProfileDisplay />
        <BalanceInfo />
      </div>
      {children}
    </div>
  );
};

export default InfoLayout;
