const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

// Task Routes
router.post('/', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
