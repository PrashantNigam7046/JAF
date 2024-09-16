// axiosConfig.js

import axios from 'axios';


// Ensure that the environment variable is correctly loaded
// const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

// if (!apiBaseUrl) {
//   console.error('REACT_APP_API_BASE_URL is not defined');
// }


// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: " https://demoserver.radicalminds.in:3010/api/v1/", 
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export default axiosInstance;
