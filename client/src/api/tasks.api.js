import axios from 'axios';

export const deleteTaskRequest = async (id) => {
    return await axios.delete(`http://localhost:4000/tasks/${id}`);
}

export const getTasksRequest = async () => {
    return await axios.get('http://localhost:4000/tasks')
}

export const createTaskRequest = async (task) =>
    await axios.post('http://localhost:4000/tasks', task);

export const getTaskRequest = async (id) => {
    return await axios.get(`http://localhost:4000/tasks/${id}`);
}

export const updateTaskRequest = async (id, newFields) => {
    return await axios.put(`http://localhost:4000/tasks/${id}`, newFields);
}

export const toggleTaskRequest = async (id, done) => {
    return await axios.put(`http://localhost:4000/tasks/${id}`, done);
}