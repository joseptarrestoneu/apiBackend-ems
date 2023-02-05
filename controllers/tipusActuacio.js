const TipusactuacionsModel = require('../models/tipusActuacio')

// GET TIPUS ACTUACIONS
const getAllTipus = async function (req, res, next) {
    const tipus = await TipusactuacionsModel.find().populate("tasks")
    res.json({ tipus })
}

// GET TIPUS BY ID
const getTipusById = async (req, res) => {
    const { id } = req.params
    const tipus = await TipusactuacionsModel.findById(id)
    res.json({ tipus })
}

// POST TIPUS ACTUACIONS
const createTipus = function (req, res, next) {

    const newTipus = new TipusactuacionsModel()

    newTipus.nomTipusActuacio = req.body.nomTipusActuacio
    newTipus.descripcioTipus = req.body.descripcioTipus
    newTipus.dataAlta = req.body.dataAlta
    newTipus.dataBaixa = req.body.dataBaixa
    newTipus.durada = req.body.durada
    newTipus.tasks = req.body.tasks

    newTipus.save((err, savedInfo) => {
        if (err) {
            console.log('Ha passat un error: ', err)
            return res.status(500).json({ error: err })
        }
        return res.json({ tipus: savedInfo })
    })
}

// PUT TASK
const putTipus = async function (req, res, next) {
    try {
        await TipusactuacionsModel.findByIdAndUpdate(req.params.id, {
            nomTipusActuacio: req.body.nomTipusActuacio,
            descripcioTipus: req.body.descripcioTipus,
            dataAlta: req.body.dataAlta,
            dataBaixa: req.body.dataBaixa,
            durada: req.body.durada,
            tasks: req.body.tasks
        })
    }
    catch (err) {
        console.error(err.message)
        res.send(400).send('Server Error')
    }
}

// DELETE TIPUS ACTUACIÓ
const deleteTipus = async function (req, res, next) {
    try {
        await TipusactuacionsModel.findByIdAndDelete(req.params.id)
        res.json(' Tipus deleted.')
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
}

module.exports = { getAllTipus, getTipusById, createTipus, putTipus, deleteTipus }
