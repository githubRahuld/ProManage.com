import React from "react";
import { FaProjectDiagram, FaPlusCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url(/img/home.jpg)",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 text-center p-6">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-4">
          Welcome to Project Management
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Manage users, projects, and tasks efficiently. Organize your workflow
          with ease.
        </p>

        <div className="flex space-x-6 justify-center">
          <a
            href="/projects"
            className="flex items-center space-x-2 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FaProjectDiagram className="text-xl" />
            <span>View Projects</span>
          </a>
          <a
            href="/create"
            className="flex items-center space-x-2 px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FaPlusCircle className="text-xl" />
            <span>Create Project</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
