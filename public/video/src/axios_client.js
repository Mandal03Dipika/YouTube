import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://localhost:5500/api/`,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    try {
      const { response } = error;
      if (response.status == 401) {
        localStorage.removeItem("accessToken");
      }
    } catch (e) {
      console.log(e);
    }
    throw error;
  }
);

export default axiosClient;
