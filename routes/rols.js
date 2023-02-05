const express = require('express')
const router = express.Router()

const rolController = require('../controllers/rol')

// GET ROLS
router.get('/', rolController.getAllRols)

// GET ROL BY ID
router.get('/:id', rolController.getRolById)

// POST ROLS
router.post('/', rolController.createRol)

// PUT ROL
router.put('/:id', rolController.putRol)

// DELETE ROL
router.delete('/:id', rolController.deleteRol)

module.exports = router
