import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormPayment from "../../components/FormPayment/FormPayment";
import "../../index.css";
import InfoLayout from "../../layout/InfoLayout/InfoLayout";

const PaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <InfoLayout>
      <FormPayment id={id} />
    </InfoLayout>
  );
};

export default PaymentPage;
