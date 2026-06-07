// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware to serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Dummy Database Array for Project Details
const myProjects = [
  {
    title: "Andhra Public Transport Tracker",
    description: "A full-stack tracking system layout with route maps and dynamic schedules built using HTML, CSS and JS.",
    techStack: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Quantum Computing Simulation Matrix",
    description: "An analytical algorithmic assessment workspace leveraging python principles for basic matrix structures.",
    techStack: ["Python", "NumPy", "Data Science"]
  },
  {
    title: "E-Commerce Application Dashboard",
    description: "A secure commercial layout built to control product catalogs and track transactional logs directly.",
    techStack: ["React.js", "Node.js", "MongoDB"]
  }
];

// API Endpoint to serve project data to frontend
app.get('/api/projects', (req, res) => {
  res.json(myProjects);
});

// Fallback to load homepage (Express 5 Safe Method)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server Logic
app.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(`🚀 Portfolio Backend running at http://localhost:${PORT}`);
  console.log(`===================================================`);
});