// src/services/apiClient.js
import axios from "axios";

const API_BASE_URL = "https://localhost//8080"; // Change this to your backend API URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
