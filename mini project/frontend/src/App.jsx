import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import EditJob from './pages/EditJob'
import AddJob from './pages/AddJob'
import { useState } from 'react'
import './App.css'

function App() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: "Google",
      role: "Software Engineer",
      location: "Bangalore",
      salary: "20 LPA",
      status: "Applied",
    },
    {
      id: 2,
      company: "Amazon",
      role: "Backend Developer",
      location: "Hyderabad",
      salary: "18 LPA",
      status: "Interview",
    }
  ]);

  const addJob = (newJob) => {

    setJobs([
      ...jobs,
      {
        id: Date.now(),
        ...newJob
      }
    ]);

  };

  const deleteJob = (id) => {

    setJobs(
      jobs.filter((job) => job.id !== id)
    );

  };

  const updateJob = (updatedJob) => {
    setJobs(
      jobs.map((job) =>
        job.id === updatedJob.id 
        ? updatedJob 
        : job
      )
    );
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Dashboard jobs={jobs} deleteJob={deleteJob} />}></Route>
        <Route path="/add-job" element={<AddJob addJob={addJob} />} />
        <Route path="/edit-job/:id" element={<EditJob jobs={jobs} updateJob={updateJob}/>}/>
      </Routes>
    </>
  )
}

export default App
