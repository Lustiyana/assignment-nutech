import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICON } from "../../constants/icon";
import { ClearPayment, PostPayment } from "../../redux/features/payment/action";
import { GetServices } from "../../redux/features/services/action";
import { ShowToast } from "../../redux/features/toast/action";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

const PaymentForm = ({ id }) => {
  const { services } = useSelector((state) => state.services);
  const payment = useSelector((state) => state.payment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetServices());
  }, []);

  useEffect(() => {
    if (payment?.error?.message) {
      dispatch(
        ShowToast({
          isOpen: true,
          message: payment.error.message,
          isSuccess: false,
        })
      );
    }
    return () => dispatch(ClearPayment());
  }, [payment?.error?.message]);

  useEffect(() => {
    if (payment?.data?.message) {
      dispatch(
        ShowToast({
          isOpen: true,
          message: payment?.data?.message,
          isSuccess: true,
        })
      );
    }
    return () => dispatch(ClearPayment());
  }, [payment?.data?.message]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(PostPayment({ service_code: services?.data[id].service_code }));
  };

  console.log(payment?.error?.message);

  return (
    <div>
      <h1 className="text-xl mb-4">Pembayaran</h1>
      <div className="flex items-center gap-4 mb-8">
        <img
          src={services?.data && services?.data[id]?.service_icon}
          alt={services?.data && services?.data[id]?.service_icon}
          className="w-8 h-8"
        />
        <p className="font-semibold">
          {services?.data && services?.data[id].service_name}
        </p>
      </div>
      <form action="" className="form-container">
        <FormInput
          type="text"
          value={services?.data && services?.data[id]?.service_tariff}
          icon={ICON["money"]}
          readOnly
        />
        <Button
          text="Bayar"
          onClick={handleClick}
          loading={payment?.loading}
          disabled={payment?.loading}
        />
      </form>
    </div>
  );
};

export default PaymentForm;
