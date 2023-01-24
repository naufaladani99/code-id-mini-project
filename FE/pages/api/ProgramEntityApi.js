import axios from "axios";
import { domain } from "../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${domain}/api/program_entity`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

const FindOne = async (id) => {
  try {
    const result = await axios.get(`${domain}/api/program_entity/${id}`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

export default { list, FindOne };
