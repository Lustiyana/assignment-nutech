import { postTopupPath, postTransactionPath } from "../path";
import Cookies from "js-cookie";
import { instance } from "../axios";

export const topupService = (data) => {
  const cookie = Cookies.get("token");
  return instance({
    url: postTopupPath,
    method: "POST",
    data,
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  })
    .then((res) => res.data)
    .catch((err) => {
      throw err.response.data;
    });
};

export const paymentService = (data) => {
  const cookie = Cookies.get("token");
  return instance({
    url: postTransactionPath,
    method: "POST",
    data,
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  })
    .then((res) => res.data)
    .catch((err) => {
      throw err.response.data;
    });
};
