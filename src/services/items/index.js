import { instance } from "../axios";
import {
  getBalancePath,
  getBannerPath,
  getServicesPath,
  getTransactionHistoryPath,
} from "../path";
import Cookies from "js-cookie";

export const servicesService = () => {
  const cookie = Cookies.get("token");
  return instance({
    url: getServicesPath,
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  })
    .then((res) => res.data)
    .catch((err) => {
      throw err.response.data;
    });
};

export const bannersService = () => {
  const cookie = Cookies.get("token");
  return instance({
    url: getBannerPath,
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  })
    .then((res) => res.data)
    .catch((err) => {
      throw err.response.data;
    });
};

export const balanceService = () => {
  const cookie = Cookies.get("token");
  return instance({
    url: getBalancePath,
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  })
    .then((res) => res.data)
    .catch((err) => {
      throw err.response.data;
    });
};

export const historiesService = (valueOffset, valueLimit) => {
  const cookie = Cookies.get("token");
  return instance({
    url: `${getTransactionHistoryPath}?offset=${valueOffset}&limit=${valueLimit}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  })
    .then((res) => res.data)
    .catch((err) => {
      throw err.response.data;
    });
};
