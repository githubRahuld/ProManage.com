import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaTrashAlt, FaCheckCircle, FaRegClock } from "react-icons/fa";

const ProjectDetails = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const { projectId } = useParams();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    status: "Pending",
  });
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/api/tasks/${projectId}`);
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [projectId]);

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${baseUrl}/api/tasks/create`, {
        project: projectId,
        ...newTask,
      });
      setTasks((prevTasks) => [...prevTasks, data]);
      setNewTask({ name: "", description: "", status: "Pending" });
      setShowAddTaskForm(false);
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to add task. Please try again.");
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`${baseUrl}/api/tasks/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete task. Please try again.");
    }
  };

  const handleUpdateStatus = async (taskId, newStatus) => {
    try {
      await axios.patch(`${baseUrl}/api/tasks/${taskId}/status`, {
        status: newStatus,
      });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskId ? { ...task, status: newStatus } : task
        )
      );
    } catch (error) {
      console.error("Error updating task status:", error);
      alert("Failed to update task status. Please try again.");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mt-20 mb-6 text-gray-800">
        Project Details
      </h1>

      <button
        onClick={() => setShowAddTaskForm((prev) => !prev)}
        className="bg-blue-500 text-white text-sm px-6 py-2 rounded-md hover:bg-blue-600 mb-6 transition ease-in-out duration-300"
      >
        {showAddTaskForm ? "Cancel" : "Add Task"}
      </button>

      {showAddTaskForm && (
        <form
          onSubmit={handleAddTask}
          className="mb-6 p-6 bg-white shadow-lg rounded-md"
        >
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">
              Task Name
            </label>
            <input
              type="text"
              value={newTask.name}
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
              className="mt-2 block w-full border rounded-md px-4 py-2 text-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              className="mt-2 block w-full border rounded-md px-4 py-2 text-lg"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">
              Status
            </label>
            <select
              value={newTask.status}
              onChange={(e) =>
                setNewTask({ ...newTask, status: e.target.value })
              }
              className="mt-2 block w-full border rounded-md px-4 py-2 text-lg"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white text-sm px-6 py-2 rounded-md hover:bg-green-600 transition ease-in-out duration-300"
          >
            Add Task
          </button>
        </form>
      )}

      {tasks.length > 0 ? (
        <div>
          <h2 className="text-2xl font-medium mb-4 text-gray-700">
            Tasks List
          </h2>
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task._id}
                className="p-4 bg-white shadow-lg rounded-md flex flex-col sm:flex-row justify-between items-center hover:shadow-xl transition duration-300 ease-in-out"
              >
                <div className="sm:w-2/3">
                  <h3 className="text-xl font-semibold text-blue-600">
                    {task.name}
                  </h3>
                  <p className="text-gray-600">{task.description}</p>
                  <div className="mt-2 text-sm text-gray-500">
                    <span className="flex items-center">
                      {task.status === "Pending" && (
                        <FaRegClock className="mr-2 text-yellow-500" />
                      )}
                      {task.status === "In Progress" && (
                        <FaRegClock className="mr-2 text-orange-500" />
                      )}
                      {task.status === "Completed" && (
                        <FaCheckCircle className="mr-2 text-green-500" />
                      )}
                      {task.status}
                    </span>
                  </div>
                </div>
                <div className="flex sm:flex-col sm:space-y-2 sm:mt-4 space-x-4">
                  <button
                    onClick={() => handleDeleteTask(task._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                  >
                    <FaTrashAlt className="inline-block mr-1" />
                    Delete
                  </button>
                  <select
                    className="border text-sm px-3 py-1 rounded-md"
                    value={task.status}
                    onChange={(e) =>
                      handleUpdateStatus(task._id, e.target.value)
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-600">
          No tasks found for this project or still loading...
        </p>
      )}
    </div>
  );
};

export default ProjectDetails;
