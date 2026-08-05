let jobs = [
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
    },
];

const getJobs = (req,res) => {
    res.json(jobs);
}

const addJob = (req,res) => {
    const newJob = {
        id:Date.now(),
        ...req.body,
    }

    jobs.push(newJob);

    res.status(201).json({
        message: 'Job added successfully',
        data: newJob
    });
}

const updateJob = (req,res) => {
    const id = Number(req.params.id); // Correct


    const index = jobs.findIndex(job => job.id ===id);

    if(index === -1){
        return res.status(404).json({
            message: 'Job not found'
        });
    }

    jobs[index] = {
        ...jobs[index],
        ...req.body
    }

    res.json(jobs[index]);

}

const deleteJob = (req,res) => {
    const id = Number(req.params.id); // Correct


    const exists = jobs.some(job => job.id ===id);

    if(!exists){
        return res.status(404).json({
            message: 'Job not found'
        });
    }

    jobs = jobs.filter(job => job.id !==id);   
    
    
    res.json({
        message: 'Job deleted successfully'
    });
}

module.exports = { getJobs ,addJob, updateJob, deleteJob};
  

  
  
  