const express = require('express')
const router = express.Router()

const seguimentController = require('../controllers/seguiment')

// GET SEGUIMENTS
router.get('/', seguimentController.getAllSeguiments)

// GET SEGUIMENT BY ID
router.get('/:id', seguimentController.getSeguimentById)

// POST SEGUIMENTS
router.post('/', seguimentController.createSeguiment)

// PUT SEGUIMENTS
router.put('/:id', seguimentController.putSeguiment)

// DELETE SEGUIMENTS
router.delete('/:id', seguimentController.deleteSeguiment)

module.exports = router
