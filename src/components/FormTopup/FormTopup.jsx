import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICON } from "../../constants/icon";
import { currencyFormatter } from "../../helper/currencyFormatter";
import TextHeader from "../atoms/TextHeader/TextHeader";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import Modal from "../Modal/Modal";
import Nominal from "../Nominal/Nominal";
import logo from "../../assets/images/Logo.png";
import {
  clearTopup,
  onChangeTopup,
  PostTopup,
} from "../../redux/features/topup/action";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormTopup = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState();
  const { amount, data, error, loading } = useSelector((state) => state.topup);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (isNaN(e.target.value)) {
      return amount + "";
    } else {
      dispatch(onChangeTopup(e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(PostTopup({ top_up_amount: amount }));
    document.getElementById("close-my_modal").click();
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (amount < 10000) {
      setErrorMessage("Minimum topup sebesar Rp.10.000");
    } else if (amount > 1000000) {
      setErrorMessage("Maximum topup sebesar Rp.1.000.000");
    } else {
      document.getElementById("my_modal").showModal();
    }
  };

  useEffect(() => {
    if (data?.message) {
      document.getElementById("success").showModal();
    }
  }, [data?.message]);

  useEffect(() => {
    if (error?.message) {
      document.getElementById("failed").showModal();
    }
  }, [error?.message]);

  useEffect(() => {
    return () => dispatch(clearTopup());
  }, []);

  return (
    <div>
      <TextHeader text1="Silahkan masukkan" text2="Nominal Top Up" />
      <div className="flex gap-4 mt-8">
        <form className="form-container">
          <FormInput
            type="tel"
            placeholder="masukkan nomimal Top Up"
            icon={ICON["money"]}
            value={amount}
            onChange={handleChange}
            errorMessage={errorMessage}
          />
          <Button
            text="Top Up"
            disabled={!amount || loading}
            loading={loading}
            onClick={handleClick}
          />
          <Modal
            text1="Anda yakin untuk topup sebesar"
            text2={`${currencyFormatter(Number(amount))}?`}
            textClick="Ya, lanjutkan topup"
            icon={logo}
            onClick={handleSubmit}
            id="my_modal"
            cancelButton
          />
          <Modal
            id="success"
            text1="Top Up Sebesar"
            text2={`${currencyFormatter(Number(amount))}`}
            text3="berhasil"
            textClick="Kembali ke Beranda"
            onClick={() => navigate("/")}
          />
          <Modal id="failed" />
        </form>
        <div>
          <Nominal />
        </div>
      </div>
    </div>
  );
};

export default FormTopup;
