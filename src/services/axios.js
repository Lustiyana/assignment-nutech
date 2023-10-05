import axios from "axios";

const baseUrl = "https://take-home-test-api.nutech-integrasi.app";

export const instance = axios.create({
  baseURL: baseUrl,
  timeout: 30 * 100,
});
