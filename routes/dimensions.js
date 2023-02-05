const express = require('express')
const router = express.Router()

const dimensioController = require('../controllers/dimensio')

// GET SEGUIMENTS
router.get('/', dimensioController.getAllDimensions)

// GET SEGUIMENT BY ID
router.get('/:id', dimensioController.getDimensioById)

// POST SEGUIMENTS
router.post('/', dimensioController.createDimensio)

// PUT SEGUIMENTS
router.put('/:id', dimensioController.putDimensio)

// DELETE SEGUIMENTS
router.delete('/:id', dimensioController.deleteDimensio)

module.exports = router
