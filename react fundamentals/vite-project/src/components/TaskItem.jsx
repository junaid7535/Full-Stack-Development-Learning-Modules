function TaskItem({ task,deleteTask, toggleTask }) {
    return (
        <div className="task-item">

            <h3
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                }}
            >
                {task.title}
            </h3>


            <p>
                Status: {task.completed ? "✅ Completed" : "⏳ Pending"}
            </p>

            <button onClick={() => toggleTask(task.id)}>
                {task.completed ? "Undo" : "Complete"}
            </button>

            <button onClick={() => deleteTask(task.id)}>
                Delete
            </button>
        </div>
    )
}

export default TaskItem;