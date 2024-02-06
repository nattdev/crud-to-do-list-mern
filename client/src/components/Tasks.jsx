import { useEffect, useState } from "react";
import TaskCard from "./TaskCard.jsx";
import { useTasks } from "./TaskContext.jsx";

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
        <div className="flex flex-col-reverse border-slate-400 border-2 mt-5 p-4 rounded-xl w-1/2 m-auto">
            <h2 className="text-2xl font-semibold py-4 order-1">Your Tasks</h2>
            {renderMain()}
        </div>
    );
}