import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks.api";
import TaskCard from "../components/TaskCard.jsx";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            const response = await getTasksRequest();
            setTasks(response.data);
        };
        loadTasks();
    }, []);

    return (
        <>
            <h2>Obteniendo Tareas</h2>
            {
                tasks.map((task) => (
                   <TaskCard task={task} key={task.id}/>
                ))
            }
        </>
    );
}