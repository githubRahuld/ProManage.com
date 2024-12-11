const Project = require("../models/Project.js");

// Create a new project
const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json({ message: "Please provide name and description" });
    }

    const newProject = new Project({
      name,
      description,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    console.log("All projects: ", projects);

    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = {
  createProject,
  getAllProjects,
};
