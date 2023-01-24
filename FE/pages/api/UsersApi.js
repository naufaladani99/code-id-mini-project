import axios from "axios";
import { domain } from "../config/config";

const findAll = async () => {
  try {
    const result = await axios.get(`${domain}/api/users`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const FindOne = async (userEntityId) => {
  try {
    const result = await axios.get(`${domain}/api/users/${userEntityId}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};
export default { FindOne, findAll };
