const Stats = ({task}) =>{
    
    const totalTasks = task.length;
    const completedTasks = task.filter((task) => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;

    return(
        <div className="stats">
            <p>Total Tasks: {totalTasks}</p>
            <p>Completed Tasks: {completedTasks}</p>
            <p>Pending Tasks: {pendingTasks}</p>
        </div>
    )
}

export default Stats;