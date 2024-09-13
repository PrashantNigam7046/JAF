import axiosInstance from '../config/axios.Config';
import { API_ENDPOINTS } from '../constants/endpoints';

// Function to log in a user
export const loginUser = (credentials) => {
  return axiosInstance.post(API_ENDPOINTS.USER_LOGIN, credentials);
};

// Add more functions for other endpoints as needed
