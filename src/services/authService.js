// src/services/authService.js
import apiClient from "./apiClient";

// Login API
export const login = async (email, password) => {
  try {
    const response = await apiClient.post("/login", { email, password });
    return response.data;  // Return API response
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Signup API
export const signUp = async (userData) => {
  try {
    const response = await apiClient.post("/signup", userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
