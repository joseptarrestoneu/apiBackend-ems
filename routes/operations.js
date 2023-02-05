const express = require('express')
const router = express.Router()

const operationController = require('../controllers/operacions')

// OPERATIONS
router.get('/', operationController.operations)

module.exports = router
