const express = require('express')
const router = express.Router()

const tipusactuacioController = require('../controllers/tipusActuacio')

// GET TIPUS ACTUACIÓ
router.get('/', tipusactuacioController.getAllTipus)

// GET TIPUS ACTUACIÓ
router.get('/:id', tipusactuacioController.getTipusById)

// POST TIPUS ACTUACIÓ
router.post('/', tipusactuacioController.createTipus)

// PUT TIPUS ACTUACIÓ
router.put('/:id', tipusactuacioController.putTipus)

// DELETE TIPUS ACTUACIÓ
router.delete('/:id', tipusactuacioController.deleteTipus)

module.exports = router
