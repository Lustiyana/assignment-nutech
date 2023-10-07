import Cookies from "js-cookie";
import { instance } from "../axios";
import {
  getProfilePath,
  putProfileImagePath,
  putProfileUpdatePath,
} from "../path";

export const profileService = () => {
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

export const editProfileService = (data) => {
  const cookie = Cookies.get("token");
  return instance({
    url: putProfileUpdatePath,
    method: "PUT",
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

export const editImageService = (data) => {
  const cookie = Cookies.get("token");
  return instance({
    url: putProfileImagePath,
    method: "PUT",
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
