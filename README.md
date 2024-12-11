# Project Management App

This is a web application designed for managing projects and tasks. The application provides a user-friendly interface to view, add, update, and delete tasks associated with different projects. It is built using **React**, **Tailwind CSS**, and **Axios** for making API requests. The app is fully responsive and works on both mobile and desktop devices.

## Features

- **Navbar**: A navigation bar that provides links to the home page, users list, and project list.
- **Project List**: A page displaying all projects with the ability to view detailed tasks associated with each project.
- **Project Details**: A page where users can view tasks related to a specific project, add new tasks, update the status of tasks, and delete tasks.
- **Responsive Design**: The UI is designed to be fully responsive using Tailwind CSS to adapt to different screen sizes, ensuring a smooth experience on mobile, tablet, and desktop devices.

## Tech Stack

- **React**: A JavaScript library for building the user interface.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Axios**: A promise-based HTTP client for making requests to the backend API.
- **React Router**: For routing and navigating between different pages (Home, Users, Projects).
- **React Icons**: Used for displaying icons in the UI, such as delete, checkmark, and clock icons.

## Installation

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://npmjs.com/) (comes with Node.js)

### Steps to Install

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/githubRahuld/ProManage.com.git

2. **Navigate to the Project Directory**:

   ```bash
  cd project-management-app

3. **Install Dependencies: Install the required npm packages**:

   ```bash
  npm install

3. **Set Up Environment Variables: Create a .env file in the root directory and add your API base URL**:
  
   ```bash
  VITE_API_BASE_URL=http://your-api-url.com

4. **Run the Application: Start the development server**:

   ```bash
  npm run dev

  The app will be available at http://localhost:5173/ in your browser.
