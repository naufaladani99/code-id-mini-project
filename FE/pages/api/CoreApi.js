import axios from "axios";
import { domain } from "../config/config";

const list = async()=>{
    try {
        const result = await axios.get(`${domain}/api/coursereview`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const FindOne = async(id)=>{
    try {
        const result = await axios.get(`${domain}/api/coursereview/${id}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

export default {list,FindOne}