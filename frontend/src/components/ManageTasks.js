import React, { useState } from 'react';
import { deleteTask, updateTask } from '../services/taskService';
import '../styles/ManageTasks.css';

const ManageTasks = ({ tasks, setTasks }) => {
  const [editingTask, setEditingTask] = useState(null);
  const [statusFilter, setStatusFilter] = useState('All');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    due_date: '',
    status: 'Pending',
  });

  // Handle task deletion with confirmation
  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this task?');
    if (!confirmed) return; // If user cancels, stop the deletion process

    try {
      await deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      alert('Task deleted successfully.');
    } catch (error) {
      console.error('Error deleting task:', error.message);
      alert('Error deleting task. Please try again.');
    }
  };

  // Handle edit click
  const handleEditClick = (task) => {
    setEditingTask(task.id);
    setFormData({
      title: task.title,
      description: task.description,
      due_date: task.due_date,
      status: task.status,
    });
  };

  // Handle form input changes
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit updated task
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedTask = { ...formData, id: editingTask };
      const result = await updateTask(editingTask, updatedTask);

      if (!result) throw new Error('Failed to update task.');

      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === editingTask ? updatedTask : task))
      );
      setEditingTask(null);
      alert('Task updated successfully.');
    } catch (error) {
      console.error('Error updating task:', error.message);
      alert('Failed to update task. Please try again.');
    }
  };

  // Handle status toggle
  const handleStatusToggle = async (task) => {
    const updatedStatus = task.status === 'Pending' ? 'Completed' : 'Pending';
    try {
      const updatedTask = { ...task, status: updatedStatus };
      const result = await updateTask(task.id, updatedTask);

      if (!result) throw new Error('Failed to update status.');

      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? { ...t, status: updatedStatus } : t))
      );
    } catch (error) {
      console.error('Error updating status:', error.message);
      alert('Failed to update status. Please try again.');
    }
  };

  // Filter tasks based on selected status
  const filteredTasks = statusFilter === 'All' 
    ? tasks 
    : tasks.filter(task => task.status === statusFilter);

  return (
    <div className="manage-tasks-component">
      {/* Status Filter */}
      <div className="status-filter">
        <div className="status-label">Status:</div>
        <div className="select-wrapper">
          <select id="statusFilter" value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>  

      <h2>Manage Tasks</h2>

      {filteredTasks.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id}>
                {editingTask === task.id ? (
                  <>
                    <td>{task.id}</td>
                    <td>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleFormChange}
                      />
                    </td>
                    <td>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        name="due_date"
                        value={formData.due_date}
                        onChange={handleFormChange}
                      />
                    </td>
                    <td>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleFormChange}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>
                    <td>
                      <button onClick={handleUpdateSubmit}>Save</button>
                      <button onClick={() => setEditingTask(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{new Date(task.due_date).toLocaleDateString()}</td>
                    <td>
                      <div className="status-toggle-container">
                        <span className={`status-badge ${task.status === 'Completed' ? 'completed' : 'pending'}`}>
                          {task.status}
                        </span>
                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={task.status === 'Completed'}
                            onChange={() => handleStatusToggle(task)}
                          />
                          <span className="slider round"></span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <button onClick={() => handleEditClick(task)}>Edit</button>
                      <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No tasks available!</p>
      )}
    </div>
  );
};

export default ManageTasks;
