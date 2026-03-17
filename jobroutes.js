const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/search", async (req, res) => {

  const { keyword, location } = req.query;

  const jobs = await Job.find({
    title: { $regex: keyword, $options: "i" },
    location: { $regex: location, $options: "i" }
  });

  res.json(jobs);
});

router.post("/add", async (req, res) => {

  const job = new Job(req.body);
  await job.save();

  res.send("Job added");
});

module.exports = router;