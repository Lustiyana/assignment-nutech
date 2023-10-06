import { instance } from "../axios";
import {
  getBalancePath,
  getBannerPath,
  getProfilePath,
  getServicesPath,
  getTransactionHistoryPath,
} from "../path";
import Cookies from "js-cookie";

export const ServicesService = () => {
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

export const BannersService = () => {
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

export const ProfileService = () => {
  const cookie = Cookies.get("token");
  return instance({
    url: getProfilePath,
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

export const BalanceService = () => {
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

export const HistoriesService = (valueOffset, valueLimit) => {
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
