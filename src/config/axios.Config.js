// axiosConfig.js
import axios from 'axios';
import { showToast } from '../utils/ToastNotification/toastNotification';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://demoserver.radicalminds.in:3010/api/v1/",
  // baseURL: process.env.REACT_APP,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Handle responses and errors globally
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      console.warn("Unauthorized! Please log in again.");
      showToast("Unauthorized", "error");
      window.location.href = '/'; 
    }
    return Promise.reject(error);
  }
);

// Ensure this is a default export
export default axiosInstance;
