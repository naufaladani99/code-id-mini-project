import axios from "axios";
import { domain } from "../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${domain}/api/course_review`);
    return result.data;
  } catch (error) {
    return await error;
  }
};

export default { list };
