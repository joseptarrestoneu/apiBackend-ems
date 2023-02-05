const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')

// GET USERS
router.get('/', userController.getAllUsers)

// GET USER BY ID
router.get('/:id', userController.getUserById)

// POST USER
router.post('/', userController.createUser)

// PUT USER
router.put('/:id', userController.putUser)

// DELETE USER
router.delete('/:id', userController.deleteUser)

module.exports = router
