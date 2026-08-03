import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Stats from './components/stats'

function App() {
  const [task, setTask] = useState([])

  const addTask = (taskName) => {
    const newTask = {id : Date.now(), title: taskName, completed: false};

    setTask([...task, newTask]);
    console.log([...task, newTask]);
  }

  const deleteTask = (id) =>{
    const updatedTasks = task.filter((task) => task.id !== id);
    setTask(updatedTasks);
  }

  const toggleTask = (id) =>{
    const updatedTasks = task.map((task) => {
      if(task.id === id){
        return {...task, completed: !task.completed};
      }
      return task;
    });
    setTask(updatedTasks);
  }


  return (
    <>
      <Header />

      <TaskForm addTask={addTask} />

      <Stats task={task} />

      <TaskList 
      task={task} 
      deleteTask = {deleteTask}
      toggleTask = {toggleTask}
      />

    </>
  )
}

export default App
