import axios from 'axios';
import axiosInstance from '../config/axios.Config';
import { API_ENDPOINTS } from '../constants/endpoints';
import { showToast } from '../utils/ToastNotification/toastNotification';


export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post(API_ENDPOINTS.USER_LOGIN, credentials);
    showToast('Login successful!', 'success');
    return response;
  } catch (error) {
    showToast(error.response?.data?.message || 'Login failed!', 'error');
    throw error; 
  }
};

export const verifyOtp = (otp_cred) => {
  try {
    let res = axiosInstance.post(API_ENDPOINTS.OTP_VERIFY, otp_cred)
    showToast("otp verified successfully")
    return res
  } catch (error) {
      showToast("wrong otp");
  }
}



// Add more functions for other endpoints as needed
