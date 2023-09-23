import axios from "axios";

const localInstance = axios.create({
  baseURL: "",
  withCredentials: true,
  timeout: 120000,
});

export { localInstance };
