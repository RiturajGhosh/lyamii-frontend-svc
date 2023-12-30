import axios from "axios";
import { axiosType } from "../components/common/enum/enum";

export const restClient = async ({
  url,
  params = {},
  type,
  payload = {},
  responseType = "",
}) => {
  // const authParams = getUserAuthParams(); // will import from auth.service
  const config = {
    params,
    // responseType,
  };
  const axiosInstance = axios.create({
    timeout: 40000,
    baseURL: "http://localhost:8081",
    headers: { "Content-Type": "application/json" },
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      throw error;
    }
  );

  switch (type) {
    case axiosType.get:
      return await axiosInstance.get(url, config);
    case axiosType.post:
      return await axiosInstance.post(url, payload, config);
    case axiosType.put:
      return await axiosInstance.put(url, payload, config);
    case axiosType.delete:
      return await axiosInstance.delete(url, { ...config, data: payload });
    default:
      return await axiosInstance.get(url, config);
  }
};
