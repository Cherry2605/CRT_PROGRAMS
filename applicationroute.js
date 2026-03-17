const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

router.post("/apply", async (req, res) => {

  const { userId, jobId } = req.body;

  const application = new Application({
    userId,
    jobId
  });

  await application.save();

  res.send("Job Applied Successfully");
});

router.get("/status/:userId", async (req, res) => {

  const applications = await Application.find({
    userId: req.params.userId
  });

  res.json(applications);
});

module.exports = router;