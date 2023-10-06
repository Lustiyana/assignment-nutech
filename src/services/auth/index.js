import { instance } from "../axios";
import { postLoginPath, postRegistrationPath } from "../path";

export const LoginService = (data) =>
  instance({
    url: postLoginPath,
    method: "POST",
    data,
  })
    .then((res) => res.data)
    .catch((err) => {
      throw err.response.data;
    });

export const RegisterService = (data) =>
  instance({
    url: postRegistrationPath,
    method: "POST",
    data,
  })
    .then((res) => res.data)
    .catch((err) => {
      throw err.response.data;
    });
