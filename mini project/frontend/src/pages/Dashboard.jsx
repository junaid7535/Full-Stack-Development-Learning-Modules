import JobCard from "../components/JobCard";
import AddJob from "./AddJob";


const Dashboard = ({jobs, deleteJob}) => {
   
    return (
        <div>
            <h1 className="mt-10 ml-10">Job Application Tracker</h1>

            <h2 className="mt-10 ml-10">total jobs : {jobs.length}</h2>

            <hr />

            {jobs.map((job) => (
                <JobCard key={job.id} job={job} deleteJob={deleteJob}></JobCard>
            ))}

            
        </div>
    )
}

export default Dashboard