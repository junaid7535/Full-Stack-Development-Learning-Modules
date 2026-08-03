import TaskItem from "./TaskItem";

function TaskList({ task, deleteTask, toggleTask}) {
    if(task.length === 0){
        return <p>No tasks available.</p>
    }

    return(
        <div className="task-list">
            {task.map((task) => (
                <TaskItem 
                
                key={task.id} 
                task={task} 
                deleteTask={deleteTask}
                toggleTask={toggleTask}

                />
            ))}
        </div>
    )
}

export default TaskList;