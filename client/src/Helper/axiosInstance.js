import axios from "axios";

const BASE_URL = "https://nimiproject-1.onrender.com/api/v1/"

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;    // The server URL
axiosInstance.defaults.withCredentials = true;     // This is important for authentication to work properly with cookies

export default axiosInstance
