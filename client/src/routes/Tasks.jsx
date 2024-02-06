import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard.jsx";
import { useTasks } from "../components/TaskContext.jsx";

export default function Tasks() {

    const {tasks, loadTasks} = useTasks();

    useEffect(() => {
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