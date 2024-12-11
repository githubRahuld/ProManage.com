import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreateTaskPage = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const { projectId } = useParams();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    console.log("Project ID from URL params:", projectId);
  }, [projectId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submission triggered");
    console.log("Payload to send:", {
      name: taskName,
      description: taskDescription,
      project: projectId,
      status,
    });

    try {
      const response = await axios.post(`${baseUrl}/api/tasks/create`, {
        name: taskName,
        description: taskDescription,
        project: projectId,
        status,
      });

      console.log("Server Response:", response);

      if (response.status === 201) {
        alert("Task created successfully!");
        setTaskName("");
        setTaskDescription("");
      } else {
        alert("Unexpected server response.");
      }
    } catch (error) {
      console.error("Error creating task:", error);
      alert("Failed to create task.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">
        Create Task in Project
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-4 shadow-md rounded-md"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Task Name
          </label>
          <input
            type="text"
            className="mt-1 border p-2 w-full"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            className="mt-1 border p-2 w-full"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 border p-2 w-full"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskPage;
