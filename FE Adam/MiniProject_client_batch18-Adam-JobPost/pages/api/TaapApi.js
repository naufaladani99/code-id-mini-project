/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { domain } from '../config/config';
import { getCookie } from 'cookies-next'

const getAll = async () => {
    try {
        const result = await axios.get(`${domain}/taap`);
        return result;
    } catch (error) {
        return error;
    }
}

const getAllUser = async () => {
    try {
        const result = await axios.get(`${domain}/taap/user`);
        return result;
    } catch (error) {
        return error;
    }
}

const getOne = async (id) => {
    try {
        const result = await axios.get(`${domain}/taap/${id}`)
    } catch (error) {
        return error;
    }
}

const create = async (data) => {
    try {
        const result = await axios.post(`${domain}/taap`, data);
        return result;
    } catch (error) {
        return error;
    }
}

const update = async(data)=>{
    try {
        const result = await axios.put(`${domain}/taap/${data.taapId}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}

const Delete = async(id)=>{
    try {
        const result = await axios.delete(`${domain}/taap/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}

const apply = async(data) => {
    try {
        const result = await axios.post(`${domain}/taap/apply`, data);
        return result;
    } catch (error) {
        return error;
    }   
}


export default {
    getAll,
    getAllUser,
    getOne,
    create,
    update,
    apply,
    Delete
}