import { createContext, useContext, useState } from "react";
import { getTasksRequest, createTaskRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest, toggleTaskRequest } from "../api/tasks.api";

export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context){
        throw new Error("useTasks must be used within a TaskContextProvider");
    } else {
        return context;
    }
}

export const TaskContextProvider = ({children}) => {

    const [tasks, setTasks] = useState([]);

    async function loadTasks() {
        const response = await getTasksRequest();
        setTasks(response.data);
    };

    const deleteTask = async (id) => {
        try {
            const response = await deleteTaskRequest(id);
            console.log(response);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    const createTask = async (values) => {
        try {
            const response = await createTaskRequest(values);
            console.log(response);
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error(error);
        }
    }

    const getTask = async (id) => {
        try {
            const response = await getTaskRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const updateTask = async (id, newFields) => {
        try {
            const response = await updateTaskRequest(id, newFields);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    const toggleDone = async (id, done) => {
        try {
            const response = await toggleTaskRequest(id, done);
             setTasks(tasks.map((task) => task.id == id ? {...task, done: !task.done} : task));
        } catch (error) {
            console.error(error);
        }
    }

    return <TaskContext.Provider value={{tasks, loadTasks, deleteTask, createTask, getTask, updateTask, toggleDone}}>
        {children}
    </TaskContext.Provider>
}