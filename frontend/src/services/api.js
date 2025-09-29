// frontend/src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // tu backend
});

// Interceptor para adjuntar el token en headers si existe
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const signup = (data) => API.post("/auth/signup", data);
export const signin = (data) => API.post("/auth/signin", data);
export const getProfile = () => API.get("/auth/profile");
