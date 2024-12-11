const express = require("express");
const {
  createTask,
  getAllTasks,
  getTasksByProject,
  deleteTask,
  updateTaskStatus,
} = require("../controllers/taskController");

const router = express.Router();

// Route to create a task
router.post("/create", createTask);

// Route to get all tasks
router.get("/", getAllTasks);

// Route to get tasks by project ID
router.get("/:projectId", getTasksByProject);
router.delete("/:id", deleteTask);
router.patch("/:id/status", updateTaskStatus);

module.exports = router;
