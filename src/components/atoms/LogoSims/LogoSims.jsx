import React from "react";
import Logo from "../../../assets/images/Logo.png";

const LogoSims = () => {
  return (
    <div className="flex gap-2 justify-center">
      <img src={Logo} alt="" />
      <h1 className="font-semibold text-2xl">SIMS PPOB</h1>
    </div>
  );
};

export default LogoSims;
