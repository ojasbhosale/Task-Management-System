import React, { useState } from 'react';
import { addTask } from '../services/taskService';
import '../styles/AddTask.css';

const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Pending'); // Default status is 'Pending'

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare task object
    const task = { title, description, due_date: dueDate, status };

    try {
      const newTask = await addTask(task);
      onTaskAdded(newTask); // Notify parent about the new task
      setTitle('');
      setDescription('');
      setDueDate('');
      setStatus('Pending'); // Reset status to 'Pending' after form submission
      window.alert('Task added successfully!');
    } catch (error) {
      window.alert('Failed to add task.');
    }
  };

  return (
      <div className='form-container'>
        <h2>Add Task</h2>
        <form className="add-task-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required />
          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
  );
};

export default AddTask;
