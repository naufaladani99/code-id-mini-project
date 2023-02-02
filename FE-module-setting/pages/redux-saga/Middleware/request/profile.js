import axios from 'axios';
import { getCookie } from 'cookies-next';

const BASE_URL = 'http://localhost:3003/profile/setting';

axios.defaults.headers.common = {
  Authorization: `Bearer ${getCookie('access_token')}`,
};

// Add / Post
export const requestAddEmail = async (data) => {
  return await axios.post(`${BASE_URL}/email`, data);
};

export const requestAddPhone = async (data) => {
  return await axios.post(`${BASE_URL}/phone`, data);
};

export const requestAddAddress = async (data) => {
  return await axios.post(`${BASE_URL}/address`, data);
};

export const requestAddEducation = async (data) => {
  return await axios.post(`${BASE_URL}/education`, data);
};

export const requestAddExperience = async (data) => {
  return await axios.post(`${BASE_URL}/experience`, data);
};

export const requestAddSkill = async (data) => {
  return await axios.post(`${BASE_URL}/skill`, data);
};

// Update / patch
export const requestUpdateEmail = async (data) => {
  return await axios.patch(`${BASE_URL}/email`, data);
};

export const requestUpdatePhone = async (data) => {
  return await axios.patch(`${BASE_URL}/phone`, data);
};

export const requestUpdateAddress = async (data) => {
  return await axios.patch(`${BASE_URL}/address`, data);
};

export const requestUpdateEducation = async (data) => {
  return await axios.patch(`${BASE_URL}/education`, data);
};

export const requestUpdateExperience = async (data) => {
  return await axios.patch(`${BASE_URL}/experience`, data);
};

// remove / delete
export const requestRemoveEmail = async (id) => {
  return await axios.delete(`${BASE_URL}/email/${id}`);
};

export const requestRemovePhone = async (id) => {
  return await axios.delete(`${BASE_URL}/phone/${id}`);
};

export const requestRemoveAddress = async (id) => {
  return await axios.delete(`${BASE_URL}/address/${id}`);
};

export const requestRemoveEducation = async (id) => {
  return await axios.delete(`${BASE_URL}/education/${id}`);
};

export const requestRemoveExperience = async (id) => {
  return await axios.delete(`${BASE_URL}/experience/${id}`);
};

export const requestRemoveSkill = async (id) => {
  return await axios.delete(`${BASE_URL}/skill/${id}`);
};
