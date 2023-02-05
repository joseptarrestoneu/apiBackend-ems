const express = require('express')
const router = express.Router()

const paiController = require('../controllers/pai')

// GET PAIS
router.get('/', paiController.getAllPais)

// GET ROL BY ID
router.get('/:id', paiController.getPaiById)

// POST ROLS
router.post('/', paiController.createPai)

// PUT ROL
router.put('/:id', paiController.putPai)

// DELETE ROL
router.delete('/:id', paiController.deletePai)

module.exports = router