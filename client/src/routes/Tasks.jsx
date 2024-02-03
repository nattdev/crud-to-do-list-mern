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

    const renderMain = () => {
        if (tasks.length === 0) {
            return <h2>No Tasks Found</h2>
        } else {
            return tasks.map((task) => <TaskCard task={task} key={task.id} />)
        }
    }

    return (
        <>
            <h2>Obteniendo Tareas</h2>
            {renderMain()}
        </>
    );
}