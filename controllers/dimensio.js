const DimensioModel = require('../models/dimensio')

// GET DIMENSIO
const getAllDimensions = async function (req, res, next) {
    const dimensio = await DimensioModel.find()
    res.json({ dimensio })
}

// GET DIMENSIO BY ID
const getDimensioById = async (req, res) => {
    const { id } = req.params
    const dimensio = await DimensioModel.findById(id)
    res.json({ dimensio })
}

// POST DIMENSIO
const createDimensio = function (req, res, next) {

    const newDimensio = new DimensioModel()

    newDimensio.nomDimensio = req.body.nomDimensio

    newDimensio.save((err, savedInfo) => {
        if (err) {
            console.log('Ha passat un error: ', err)
            return res.status(500).json({ error: err })
        }
        return res.json({ dimensio: savedInfo })
    })
}

// PUT DIMENSIO
const putDimensio = async function (req, res, next) {
    try {
        await DimensioModel.findByIdAndUpdate(req.params.id, {
            nomDimensio: req.body.nomDimensio
        })
        res.send('Dimensio Updated!')
    }
    catch (err) {
        console.error(err.message)
        res.send(400).send('Server Error')
    }
}

// DELETE DIMENSIO
const deleteDimensio = async function (req, res, next) {
    try {
        await DimensioModel.findByIdAndDelete(req.params.id)
        res.json(' Dimensio deleted.')
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
}

module.exports = { getAllDimensions, getDimensioById, createDimensio, putDimensio, deleteDimensio }
