import axios from "axios";
import { axiosType } from "../components/common/enum/enum";
import { getCookie } from "../components/common/enum/functions";

export const restClient = async ({ url, params = {}, type, payload = {} }) => {
  console.log("Initializing restClient...");

  const cookie = getCookie("user");
  const token = (cookie && JSON.parse(cookie)?.token) || "";
  const headers = token
    ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
    : { "Content-Type": "application/json" };

  const axiosInstance = axios.create({
    // baseURL: "https://backend.lyamii.com",
    baseURL: "http://localhost:8081",
    headers: headers,
    timeout: 40000,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      console.log("API response received:", response);
      return response;
    },
    (error) => {
      console.error("API error:", error);
      throw error;
    }
  );

  try {
    console.log("Making API request...", { url, params, type, payload });
    switch (type) {
      case axiosType.get:
        return await axiosInstance.get(url, { params });
      case axiosType.post:
        return await axiosInstance.post(url, payload, { params });
      case axiosType.put:
        return await axiosInstance.put(url, payload);
      case axiosType.delete:
        return await axiosInstance.delete(url, { data: payload });
      default:
        return await axiosInstance.get(url, { params });
    }
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};
