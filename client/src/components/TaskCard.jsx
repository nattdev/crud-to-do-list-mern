import { useNavigate } from "react-router-dom";
import { useTasks } from "./TaskContext";


function TaskCard({ task }) {

    const {deleteTask, toggleDone} = useTasks();
    const navigate = useNavigate();

    const handleToggleTask = async(id, done) => {
        await toggleDone(id, done == 0 ? {done : true} : {done : false});
    }

    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span>{task.done == 1 ? "✅" : "❌"}</span>
            <p>{task.dateCreate}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
            <button onClick={() => handleToggleTask(task.id, task.done)}>Toggle Task</button>
        </div>
    )
}

export default TaskCard;