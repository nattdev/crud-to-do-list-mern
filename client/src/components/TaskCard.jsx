import { useNavigate } from "react-router-dom";
import { useTasks } from "./TaskContext";


function TaskCard({ task }) {

    const {deleteTask, toggleDone} = useTasks();
    const navigate = useNavigate();

    const handleToggleTask = async(id, done) => {
        await toggleDone(id, done == 0 ? {done : true} : {done : false});
    }

    return (
        <div className='grid bg-slate-100 border-4 border-slate-100 border-opacity-150 mt-5 p-2 rounded-xl w-full my-4 grid-cols-3 grid-rows-4 items-center'>
            <h3 className="text-2xl font-semibold col-span-full">{task.title}<span className="px-2">{task.done == 1 ? "✅" : "❌"}</span></h3>
            <p className="text-sm col-span-full pb-2 font-light">{task.dateCreate ? task.dateCreate.replace(/T/, ' ').replace(/\..+/, '') : task.dateCreate}</p>
            <p className="font-normal pb-4 col-span-full">{task.description}</p>
            <button className="bg-red-600 text-white rounded-md px-2 py-1 mx-1 sm:mx-2" onClick={() => deleteTask(task.id)}>Delete</button>
            <button className="bg-blue-500 text-white rounded-md px-2 py-1 mx-1 sm:mx-2" onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
            <button className="bg-slate-500 text-white rounded-md px-2 py-1 mx-1 sm:mx-2" onClick={() => handleToggleTask(task.id, task.done)}>Check</button>
        </div>
    )
}

export default TaskCard;