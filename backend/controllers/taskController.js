const taskModel = require('../models/taskModel');

// Create a new task
exports.createTask = (req, res) => {
  const task = req.body;
  taskModel.createTask(task, (err, newTask) => {
    if (err) {
      res.status(500).json({ error: 'Failed to create task' });
    } else {
      res.status(201).json(newTask);
    }
  });
};

// Get all tasks
exports.getAllTasks = (req, res) => {
  taskModel.getAllTasks((err, tasks) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    } else {
      res.status(200).json(tasks);
    }
  });
};

// Update a task
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const task = req.body;
  taskModel.updateTask(id, task, (err, updatedTask) => {
    if (err) {
      res.status(500).json({ error: 'Failed to update task' });
    } else {
      res.status(200).json(updatedTask);
    }
  });
};

// Delete a task
exports.deleteTask = (req, res) => {
  const { id } = req.params;
  taskModel.deleteTask(id, (err, message) => {
    if (err) {
      res.status(500).json({ error: 'Failed to delete task' });
    } else {
      res.status(200).json(message);
    }
  });
};
