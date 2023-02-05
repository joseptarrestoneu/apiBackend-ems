const express = require('express')
const router = express.Router()

const taskController = require('../controllers/task')

// GET TASKS
router.get('/', taskController.getAllTask)

// GET TASK BY ID
router.get('/:id', taskController.getTaskById)

// POST TASK
router.post('/', taskController.createTask)

// PUT TASK
router.put('/:id', taskController.putTask)

// DELETE TASK
router.delete('/:id', taskController.deleteTask)

module.exports = router
