const express = require('express')
const router = express.Router()

const actuacioController = require('../controllers/actuacio')

// GET ACTUACIONS
router.get('/', actuacioController.getAllActuacions)

// GET ACTUACIO BY ID
router.get('/:id', actuacioController.getActuacioById)

// POST ACTUACIONS
router.post('/', actuacioController.createActuacio)

// PUT ACTUACIONS
router.put('/:id', actuacioController.putActuacio)

// DELETE ACTUACIONS
router.delete('/:id', actuacioController.deleteActuacio)

module.exports = router
