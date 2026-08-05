import { Link } from "react-router-dom";

const JobCard = ({ job, deleteJob }) => {
    return (
        <div className="ml-20" key={job.id}>
            <h3 className="mt-5">{job.company}</h3>
            <p>{job.role}</p>

            <p>
                📍 {job.location}
            </p>

            <p>
                💰 {job.salary}
            </p>

            <p>
                Status:
                <strong> {job.status}</strong>
            </p>


            <Link className="bg-amber-200" to={`/edit-job/${job.id}`}> Edit </Link>

            <button
                onClick={() => deleteJob(job.id)} className="ml-4 bg-amber-200 cursor-pointer" 
            >
                Delete
            </button>
        </div>
    )
}

export default JobCard;