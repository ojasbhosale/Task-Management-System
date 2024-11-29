import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

// Get all tasks
export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error.response || error.message);
    throw error;
  }
};

// Add a new task
export const addTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error.response || error.message);
    throw error;
  }
};

// Update an existing task
export const updateTask = async (id, updatedTask) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error.response || error.message);
    throw error;
  }
};

// Delete a task
export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting task:', error.response || error.message);
    throw error;
  }
};
