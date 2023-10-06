import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
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
      <PaymentForm id={id} />
    </InfoLayout>
  );
};

export default PaymentPage;
