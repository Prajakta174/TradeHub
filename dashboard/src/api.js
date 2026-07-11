import axios from "axios";

const API = axios.create({
  baseURL: "https://tradehub-6mu3.onrender.com/api",
  withCredentials: true,
});

export default API;
