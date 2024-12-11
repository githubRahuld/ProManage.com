import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaProjectDiagram, FaArrowRight, FaRegFileAlt } from "react-icons/fa"; // React icons

const ProjectList = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/projects/`);
        console.log("API Response:", response.data); // Debug response
        setProjects(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Please try again later.");
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return <div className="text-red-500 p-6">{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="mt-20 text-3xl font-bold text-gray-700 mb-6">Projects</h1>

      {Array.isArray(projects) && projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project._id}
              className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div className="flex items-center space-x-2">
                <FaProjectDiagram className="text-blue-600 text-2xl" />
                <h3 className="text-xl font-semibold text-blue-600">
                  {project.name}
                </h3>
              </div>
              <p className="text-gray-500 mt-2">
                <FaRegFileAlt className="inline-block mr-1 text-gray-400" />
                {project.description}
              </p>
              <Link
                to={`/tasks/${project._id}`}
                className="flex items-center mt-4 text-sm text-blue-500 hover:text-blue-700 hover:underline"
              >
                <span>View Tasks</span>
                <FaArrowRight className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No projects found.</p>
      )}
    </div>
  );
};

export default ProjectList;
