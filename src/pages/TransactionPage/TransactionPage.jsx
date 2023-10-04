import React from "react";
import ProfileDisplay from "../../components/ProfileDisplay/ProfileDisplay";
import SaldoInfo from "../../components/SaldoInfo/SaldoInfo";
import TransactionList from "../../components/TransactionList/TransactionList";
import "../../index.css";

const TransactionPage = () => {
  return (
    <div className="main-container">
      <div className="flex justify-between">
        <ProfileDisplay />
        <SaldoInfo />
      </div>
      <TransactionList />
    </div>
  );
};

export default TransactionPage;
