import { API_ENDPOINTS } from '../constants/endpoints';
import { showToast } from '../utils/ToastNotification/toastNotification';
import axiosInstance from '../config/axios.Config.js';

// Function to post candidate details
export const postCandidateDetails = async (body) => {
  try {
    const res = await axiosInstance.post(API_ENDPOINTS.POST_CANDIDATE_DETAILS_BASIC, body);
    return res;
  } catch (error) {
    console.log("error--", error.response.data.message)
    showToast(error.response.data.message, 'error');
    throw error; 
  }
};

// Function to get open positions
export const getOpenPositions = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.GET_OPEN_POSTITONS);
    return res; // Ensure you return the response
  } catch (error) {
    showToast("Unable to fetch open positions");
    console.error("Error fetching open positions:", error);
    throw error; 
  }
};

// Function to get applied sources
export const getAppliedSource = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.GET_SOURCE);
    return res; 
  } catch (error) {
    console.warn("Error fetching applied sources:", error);
    throw error; 
  }
};


export const getRelations = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.GET_RELATIONS_LIST)
    return res
  } catch (error) {
    console.log(error)
  }
}

export const postFamilyDetails = async (body) => {
  try {
    const res = await axiosInstance.post(API_ENDPOINTS.POST_FAMILY_DETAILS_OF_CANDIDATE, body);
    return res;
  } catch (error) {
    console.log("error--", error)
    showToast(error.response.data.message, 'error');
    throw error; 
  }
};

export const postEducationalDetails = async (body) => {
  try {
    const res = await axiosInstance.post(API_ENDPOINTS.POST_CANDIDATE_EDUCATION_DETAILS, body);
    console.log("res---", res.data.message)
    showToast(res.data.message, "success")

    return res;
  } catch (error) {
    console.log("error--", error)
    showToast(error.response.data.message, 'error');
    throw error; 
  }
}



export const postExperienceDetails = async (body) => {
  try {
    const res = await axiosInstance.post(API_ENDPOINTS.POST_CANDIDATE_EXPERIENCE, body);
    console.log("res---", res.data.message)
    showToast(res.data.message, "success")

    return res;
  } catch (error) {
    console.log("error--", error)
    showToast(error.response.data.message, 'error');
    throw error; 
  }
}



export const postRefernceDetails = async (body) => {
  try {
    const res = await axiosInstance.post(API_ENDPOINTS.POST_CANDIDATE_REFERENCES, body);
    console.log("res---", res.data.message)
    showToast(res.data.message, "success")

    return res;
  } catch (error) {
    console.log("error--", error)
    showToast(error.response.data.message, 'error');
    throw error; 
  }
}