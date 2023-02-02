import axios from "axios";
import { domain } from "../config/config";

const List = async () => {
  try {
    const result = await axios.get(`${domain}/api/jobtype/`);
    const data = result.data;
    return data;
  } catch (error) {
    return await error.message;
  }
};

const FindOne = async (id) => {
  try {
    const result = await axios.get(`${domain}/api/jobtype/${id}`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

export default { List, FindOne };
