import { useState } from "react";

const AddJob = ({addJob}) => {

    const [job, setJob] = useState({
        company: "",
        role: "",
        location: "",
        salary: "",
        status: "Applied",
    });


    const handleChange = (e) => {

        setJob({
            ...job,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(job);

        addJob(job);

    };


    return (
        <div>

            <h1>Add Job</h1>


            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={job.company}
                    onChange={handleChange}
                />


                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={job.role}
                    onChange={handleChange}
                />


                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={job.location}
                    onChange={handleChange}
                />


                <input
                    type="text"
                    name="salary"
                    placeholder="Salary"
                    value={job.salary}
                    onChange={handleChange}
                />


                <select
                    name="status"
                    value={job.status}
                    onChange={handleChange}
                >

                    <option value="Applied">
                        Applied
                    </option>

                    <option value="Interview">
                        Interview
                    </option>

                    <option value="Rejected">
                        Rejected
                    </option>

                    <option value="Offer">
                        Offer
                    </option>

                </select>


                <button type="submit">
                    Add Job
                </button>


            </form>

        </div>
    );
};


export default AddJob;