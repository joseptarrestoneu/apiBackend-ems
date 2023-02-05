const express = require('express')
const router = express.Router()

const serveiController = require('../controllers/servei')

// GET SERVEIS
router.get('/', serveiController.getAllServeis)

// GET SERVEI BY ID
router.get('/:id', serveiController.getServeiById)

// POST SERVEIS
router.post('/', serveiController.createServei)

// PUT SERVEI
router.put('/:id', serveiController.putServei)

// DELETE SERVEI
router.delete('/:id', serveiController.deleteServei)

module.exports = router
