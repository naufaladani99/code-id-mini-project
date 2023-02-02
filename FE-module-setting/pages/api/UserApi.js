import axios from 'axios';
import { domain } from '../config/config';
import { getCookie } from 'cookies-next';

const signup = async (data) => {
  try {
    const result = await axios.post(`${domain}/auth/signup`, data);
    return result;
  } catch (error) {
    return error;
  }
};

const signin = async (data) => {
  try {
    const result = await axios.post(`${domain}/auth/login`, data);
    return result;
  } catch (error) {
    return error;
  }
};

const profile = async () => {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${getCookie('access_token')}`,
  };
  try {
    const result = await axios.get(`${domain}/profile`);
    return result;
  } catch (error) {
    return error;
  }
};

export const getProfile = async (id) => {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${getCookie('access_token')}`,
  };
  try {
    const result = await axios.get(`${domain}/profile/fetch`);
    return result;
  } catch (err) {
    return err;
  }
};

//TODO: Update
export const updateProfile = async (data) => {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${getCookie('access_token')}`,
  };

  try {
    const result = await axios.patch(`${domain}/profile/user`, data);
    return result;
  } catch (err) {
    return err.message;
  }
};

export const uploadPhoto = async (data) => {
  try {
    const result = await axios.patch(`${domain}/uploadphoto`, data);
    return result;
  } catch (error) {
    return error.message;
  }
};

export const updatePassword = async (data) => {
  try {
    const result = await axios.patch(`${domain}/passwordupdate`, data);
    return result;
  } catch (err) {
    return err.message;
  }
};

export { signin, signup, profile };
