const express = require("express");
const {
  createProject,
  getAllProjects,
} = require("../controllers/projectController.js");

const router = express.Router();

// Create a new project
router.route("/create").post(createProject);

// Get all projects
router.route("/").get(getAllProjects);

module.exports = router;
