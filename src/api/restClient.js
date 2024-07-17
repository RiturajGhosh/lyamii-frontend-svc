import axios from "axios";
import { axiosType } from "../components/common/enum/enum";
import { getCookie } from "../components/common/enum/functions";
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
  const cookie = getCookie("user");
  const token = (cookie && JSON.parse(cookie)?.token) || "";
  const headers =
    JSON.stringify(token).length > 0
      ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
      : { "Content-Type": "application/json" };
  const axiosInstance = axios.create({
    timeout: 40000,
    // httpsAgent: new (require("https").Agent)({ rejectUnauthorized: false }),
    // baseURL: "http://localhost:8081",
    baseURL:
      "https://internal-Lyamii-internalALB-1594084741.ap-south-1.elb.amazonaws.com",
    headers: headers,
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
