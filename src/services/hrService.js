import { showToast } from '../utils/ToastNotification/toastNotification';
import { API_ENDPOINTS_ADMIN } from '../constants/admin_endpoints.js';
import axiosInstance_Admin from '../config/axios_admin_Config.js';
import axios from "axios";

// Function to post hr login without token
export const postHrLogin = async (body) => {
    try {
      const res = await axios.post(`https://demoserver.radicalminds.in:3010/api/v1/${API_ENDPOINTS_ADMIN.POST_HR_LOGIN}`, body);
      return res;
    } catch (error) {
      console.log("error--", error.response.data.message)
      showToast(error.response.data.message, 'error');
      throw error; 
    }
  };

  export const getCandidateDetailsDashboard = async () => {
    try {
      const res = await axiosInstance_Admin.get(API_ENDPOINTS_ADMIN.GET_CANDIDATE_ALL_DETAILS);
      return res;
    } catch (error) {
      // showToast(error.response.data.message, 'error');
      throw error; 
    }
  };

  export const  getCountCandidate = async () => {
    try {
      const res = await axiosInstance_Admin.get(API_ENDPOINTS_ADMIN.GET_CANDIDATE_COUNT);
      return res
    } catch (error) {
      throw error
    }
  } 