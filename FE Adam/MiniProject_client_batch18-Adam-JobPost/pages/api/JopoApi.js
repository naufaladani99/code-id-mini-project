/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { domain } from '../config/config';
import { getCookie } from 'cookies-next'

const getAll = async () => {
    try {
        const result = await axios.get(`${domain}/jopo`);
        return result;
    } catch (error) {
        return error;
    }
}

const getOne = async (id) => {
    try {
        const result = await axios.get(`${domain}/jopo/${id}`)
    } catch (error) {
        return error;
    }
}

const create = async (data) => {
    try {
        const result = await axios.post(`${domain}/jopo`, data);
        return result;
    } catch (error) {
        return error;
    }
}

const update = async(data)=>{
    try {
        const result = await axios.put(`${domain}/jopo/${data.jopoId}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}

const Delete = async(id)=>{
    try {
        const result = await axios.delete(`${domain}/jopo/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}

const publish = async (id) => {
    try {
        const result = await axios.put(`${domain}/jopo/publish/${id}`);
        return result;
    } catch (error) {
        return error;
    }
}

const unPublish = async (id) => {
    try {
        const result = await axios.put(`${domain}/jopo/unpublish/${id}`);
        return result;
    } catch (error) {
        return error;
    }
}


export default {
    getAll,
    publish,
    unPublish,
    getOne,
    create,
    update,
    Delete
}