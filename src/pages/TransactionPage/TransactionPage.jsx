import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TransactionList from "../../components/TransactionList/TransactionList";
import "../../index.css";
import InfoLayout from "../../layout/InfoLayout/InfoLayout";

const TransactionPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <InfoLayout>
      <TransactionList />
    </InfoLayout>
  );
};

export default TransactionPage;
