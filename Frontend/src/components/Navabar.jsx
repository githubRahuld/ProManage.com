import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 fixed top-0 left-0 w-full z-20 bg-transparent shadow-lg">
      <div className="container mx-auto flex justify-between items-center text-green-500">
        {/* Project Name */}
        <Link
          to="/home"
          className="text-orange-400 text-3xl font-extrabold tracking-wide font-poppins"
        >
          ProManage.com
        </Link>

        <div className="lg:hidden">
          <button className="text-green-500 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex space-x-8 text-lg font-medium">
          <li>
            <Link
              to="/home"
              className="hover:text-green-600 transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="hover:text-green-600 transition duration-300 ease-in-out"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-green-600 transition duration-300 ease-in-out"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
