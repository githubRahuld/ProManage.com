import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectManagement from "./pages/ProjectList.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navabar.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import CreateTaskPage from "./pages/CreateTaskPage.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/projects" element={<ProjectManagement />} />
        <Route path="/tasks/:projectId" element={<ProjectDetails />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/tasks/:projectId" element={<CreateTaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
