import axios from "axios";
import Cookies from "universal-cookie";
import { server_url } from "./Url";

const axiosInstance = axios.create({
  baseURL: `${server_url()}`, // Replace with your API base URL
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add custom headers or any other modifications here
    const token = new Cookies().get("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
