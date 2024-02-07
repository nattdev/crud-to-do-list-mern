import axios from 'axios';

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

export const deleteTaskRequest = async (id) => {
    return await axios.delete(`${URL}/tasks/${id}`);
}

export const getTasksRequest = async () => {
    return await axios.get(`${URL}/tasks`)
}

export const createTaskRequest = async (task) =>
    await axios.post(`${URL}/tasks`, task);

export const getTaskRequest = async (id) => {
    return await axios.get(`${URL}/tasks/${id}`);
}

export const updateTaskRequest = async (id, newFields) => {
    return await axios.put(`${URL}/tasks/${id}`, newFields);
}

export const toggleTaskRequest = async (id, done) => {
    return await axios.put(`${URL}/tasks/${id}`, done);
}