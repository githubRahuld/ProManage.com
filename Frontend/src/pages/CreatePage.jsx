import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  console.log(baseUrl);

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/projects/create`, {
        name: projectName,
        description: projectDescription,
      });

      console.log(response.data); // Debugging response from server
      if (response.status === 201) {
        alert("Project created successfully!");
        navigate(`/tasks/${response.data._id}`);
      } else {
        alert("Unexpected server response");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Failed to create project.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">
        Create a Project
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-4 shadow-md rounded-md"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Project Name
          </label>
          <input
            type="text"
            className="mt-1 border p-2 w-full"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            className="mt-1 border p-2 w-full"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
