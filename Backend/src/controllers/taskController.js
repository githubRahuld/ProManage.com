const Task = require("../models/Task.js");

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const { name, description, status, project, user } = req.body;

    // Validate that all necessary data is provided
    if (!name || !description || !status || !project) {
      return res.status(400).json({
        message:
          "All fields (name, description, status, and project) are required.",
      });
    }

    const newTask = new Task({
      name,
      description,
      status,
      project,
      user, // Optional field; only include if authenticated user context is needed
    });

    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    console.error("Error while creating task:", error);
    res
      .status(500)
      .json({ message: "Error creating task", error: error.message });
  }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("project").populate("user");
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error while fetching tasks:", error);
    res
      .status(500)
      .json({ message: "Error fetching tasks", error: error.message });
  }
};

// Get tasks by projectId
exports.getTasksByProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const tasks = await Task.find({ project: projectId });
    res.status(200).json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tasks for this project", error });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res
      .status(200)
      .json({ message: "Task deleted successfully", task: deletedTask });
  } catch (error) {
    console.error("Error deleting task:", error);
    res
      .status(500)
      .json({ message: "Error deleting task", error: error.message });
  }
};

// Update Task Status
exports.updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status input
    const validStatuses = ["Pending", "In Progress", "Completed"];
    if (!validStatuses.includes(status)) {
      return res
        .status(400)
        .json({ message: "Invalid status value provided." });
    }

    // Find the task and update its status
    const task = await Task.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.status(200).json({
      message: "Task status updated successfully.",
      task,
    });
  } catch (error) {
    console.error("Error updating task status:", error);
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};
