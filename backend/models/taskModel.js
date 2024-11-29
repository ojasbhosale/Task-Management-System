const db = require('../config/db');

// Create a new task
const createTask = (task, callback) => {
  const { title, description, due_date, status } = task;
  const query = `INSERT INTO tasks (title, description, due_date, status) VALUES (?, ?, ?, ?)`;
  db.run(query, [title, description, due_date, status], function (err) {
    if (err) {
      callback(err);
    } else {
      callback(null, { id: this.lastID, ...task });
    }
  });
};

// Get all tasks
const getAllTasks = (callback) => {
  const query = `SELECT * FROM tasks ORDER BY id DESC`;
  db.all(query, [], (err, rows) => {
    if (err) {
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

// Update a task
const updateTask = (id, task, callback) => {
  const { title, description, due_date, status } = task;
  const query = `UPDATE tasks SET title = ?, description = ?, due_date = ?, status = ? WHERE id = ?`;
  db.run(query, [title, description, due_date, status, id], function (err) {
    if (err) {
      callback(err);
    } else {
      callback(null, { id, ...task });
    }
  });
};

// Delete a task
const deleteTask = (id, callback) => {
  const query = `DELETE FROM tasks WHERE id = ?`;
  db.run(query, [id], function (err) {
    if (err) {
      callback(err);
    } else {
      callback(null, { message: `Task with id ${id} deleted` });
    }
  });
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
