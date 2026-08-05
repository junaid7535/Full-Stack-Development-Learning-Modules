const express = require("express");

const router = express.Router();

const { getJobs,addJob,updateJob, deleteJob } = require("../controllers/jobController.js");

router.get("/",getJobs);

router.post("/",addJob);

router.put("/:id",updateJob);

router.delete("/:id",deleteJob);

module.exports = router;