import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextHeader from "../../components/atoms/TextHeader/TextHeader";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import Modal from "../../components/Modal/Modal";
import Nominal from "../../components/Nominal/Nominal";
import ProfileDisplay from "../../components/ProfileDisplay/ProfileDisplay";
import SaldoInfo from "../../components/SaldoInfo/SaldoInfo";
import "../../index.css";
import { OnChangeTopup, PostTopup } from "../../redux/features/topup/action";

const TopUp = () => {
  const topup = useSelector((state) => state.topup);
  const dispatch = useDispatch();
  console.log(topup);
  const handleChange = (e) => {
    if (isNaN(e.target.value)) {
      return topup.top_up_amount + "";
    } else {
      dispatch(OnChangeTopup(e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(PostTopup({ top_up_amount: topup.top_up_amount }));
  };

  return (
    <div className="main-container">
      <div className="flex justify-between">
        <ProfileDisplay />
        <SaldoInfo />
      </div>
      <TextHeader text1="Silahkan masukkan" text2="Nominal Top Up" />
      <div className="flex gap-4">
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-4">
          <FormInput
            type="tel"
            placeholder="masukkan nomimal Top Up"
            icon="ic:round-money"
            value={topup.top_up_amount}
            onChange={handleChange}
          />
          <Button text="Top Up" disabled={!topup.top_up_amount} type="submit" />
        </form>
        <div>
          <Nominal />
        </div>
      </div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        open modal
      </button>
      <Modal />
    </div>
  );
};

export default TopUp;
