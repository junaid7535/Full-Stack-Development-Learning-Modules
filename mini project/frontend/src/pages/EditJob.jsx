import { useState } from "react";
import { useParams } from "react-router-dom";


const EditJob = ({ jobs, updateJob }) => {


    const { id } = useParams();


    const existingJob = jobs.find(
        (job) => job.id === Number(id)
    );


    const [job, setJob] = useState(existingJob);



    const handleChange = (e) => {

        setJob({
            ...job,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = (e) => {

        e.preventDefault();

        updateJob(job);

        alert("Job Updated");

    };


    return (

        <div>

            <h1>Edit Job</h1>


            <form onSubmit={handleSubmit}>


                <input
                    name="company"
                    value={job.company}
                    onChange={handleChange}
                />


                <input
                    name="role"
                    value={job.role}
                    onChange={handleChange}
                />


                <input
                    name="location"
                    value={job.location}
                    onChange={handleChange}
                />


                <input
                    name="salary"
                    value={job.salary}
                    onChange={handleChange}
                />


                <select
                    name="status"
                    value={job.status}
                    onChange={handleChange}
                >

                    <option>
                        Applied
                    </option>

                    <option>
                        Interview
                    </option>

                    <option>
                        Rejected
                    </option>

                    <option>
                        Offer
                    </option>


                </select>


                <button>
                    Update Job
                </button>


            </form>

        </div>
    )

}


export default EditJob;