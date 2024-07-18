import axios from "axios";

const localInstance = axios.create({
  baseURL: "",
  withCredentials: true,
  timeout: 1200000,
});

export { localInstance };
