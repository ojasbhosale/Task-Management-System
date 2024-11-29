import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';
import ManageTasks from './components/ManageTasks';
import { getTasks } from './services/taskService';

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks on initial render
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);  // Set tasks state
    } catch (error) {
      window.alert('Failed to fetch tasks.');
    }
  };

  const handleTaskAdded = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);  // Add new task
  };

  const handleTaskDeleted = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));  // Delete task by ID
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<AddTask onTaskAdded={handleTaskAdded} />} />
          <Route path="/add-tasks" element={<AddTask onTaskAdded={handleTaskAdded} />} />
          <Route path="/manage-tasks" element={<ManageTasks tasks={tasks} setTasks={setTasks} onTaskDeleted={handleTaskDeleted} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
