// axiosConfig.js
import axios from 'axios';
import { showToast } from '../utils/ToastNotification/toastNotification';


// Create an Axios instance
const axiosInstance_Admin = axios.create({
  baseURL: "https://demoserver.radicalminds.in:3010/api/v1/",
  // baseURL: process.env.REACT_APP,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add a request interceptor
axiosInstance_Admin.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken_hr');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Handle responses and errors globally
axiosInstance_Admin.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      console.warn("Unauthorized Admin! Please log in again.");
      showToast("Unauthorized Admin", "error");
      window.location.href = '/login-hr'; 
    }
    return Promise.reject(error);
  }
);

export default axiosInstance_Admin;
