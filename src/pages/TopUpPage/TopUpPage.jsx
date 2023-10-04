import React from "react";
import TextHeader from "../../components/atoms/TextHeader/TextHeader";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import Nominal from "../../components/Nominal/Nominal";
import ProfileDisplay from "../../components/ProfileDisplay/ProfileDisplay";
import SaldoInfo from "../../components/SaldoInfo/SaldoInfo";
import "../../index.css";

const TopUp = () => {
  return (
    <div className="main-container">
      <div className="flex justify-between">
        <ProfileDisplay />
        <SaldoInfo />
      </div>
      <TextHeader text1="Silahkan masukkan" text2="Nominal Top Up" />
      <div className="flex gap-4">
        <div className="flex flex-col flex-1 gap-4">
          <FormInput
            type="tel"
            placeholder="masukkan nomimal Top Up"
            icon="ic:round-money"
          />
          <Button text="Top Up" />
        </div>
        <div>
          <Nominal />
        </div>
      </div>
    </div>
  );
};

export default TopUp;
