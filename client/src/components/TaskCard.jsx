function TaskCard({task}) {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span>{task.done == 1 ? "✅" : "❌"}</span>
            <p>{task.dateCreate}</p>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default TaskCard;