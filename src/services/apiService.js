
import { API_ENDPOINTS } from '../constants/endpoints';
import { showToast } from '../utils/ToastNotification/toastNotification';
import axiosInstance from '../config/axios.Config.js';
import axios from 'axios';

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(API_ENDPOINTS.USER_LOGIN, credentials);
    showToast('Login successful!', 'success');
    return response;
  } catch (error) {
    showToast(error.response?.data?.message || 'Login failed!', 'error');
    throw error; 
  }
};

// without token
export const verifyOtp = (otp_cred) => {
  try {
    let res = axios.post(API_ENDPOINTS.OTP_VERIFY, otp_cred)
    showToast("otp verified successfully")
    return res
  } catch (error) {
      showToast("wrong otp");
  }
}

export const postCandidateDetails = (body) => {
  try {
    let res = axiosInstance.post(API_ENDPOINTS.POST_CANDIDATE_DETAILS_BASIC, body)
    return res
  } catch (error) {
      showToast("wrong details");
  }
}


export const getOpenPositions = (body) => {
  try {
    let res = axiosInstance.get(API_ENDPOINTS.GET_OPEN_POSTITONS, body)
    return res
  } catch (error) {
    showToast("unable to fetch open positions")
  }
}


// Add more functions for other endpoints as needed
