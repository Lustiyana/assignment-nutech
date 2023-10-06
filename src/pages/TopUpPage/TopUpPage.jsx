import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormTopup from "../../components/FormTopup/FormTopup";
import InfoLayout from "../../layout/InfoLayout/InfoLayout";

const TopUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <InfoLayout>
      <FormTopup />
    </InfoLayout>
  );
};

export default TopUp;
