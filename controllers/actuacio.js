const ActuacioModel = require('../models/actuacio')

// GET ACTUACIONS
const getAllActuacions = async function (req, res, next) {
    const actuacio = await ActuacioModel.find().populate('user').populate('usuari').populate('tipusActuacio').populate('tasks')
    res.json({ actuacio })
}

// GET ACTUACIO BY ID
const getActuacioById = async (req, res) => {
    const { id } = req.params
    const actuacio = await ActuacioModel.findById(id)
    res.json({ actuacio })
}

// POST ACTUACIO
const createActuacio = function (req, res, next) {

    const newActuacio = new ActuacioModel()

    newActuacio.dataAlta = req.body.dataAlta
    newActuacio.horaInici = req.body.horaInici
    newActuacio.horaFinal = req.body.horaFinal
    newActuacio.time = req.body.time
    newActuacio.pai = req.body.pai
    newActuacio.user = req.body.user
    newActuacio.usuari = req.body.usuari
    newActuacio.tipusActuacio = req.body.tipusActuacio
    newActuacio.tasks = req.body.tasks
    newActuacio.validada = req.body.validada

    newActuacio.save((err, savedInfo) => {
        if (err) {
            console.log('Ha passat un error: ', err)
            return res.status(500).json({ error: err })
        }
        return res.json({ actuacio: savedInfo })
    })
}

// PUT ACTUACIO
const putActuacio = async function (req, res, next) {
    try {
        await ActuacioModel.findByIdAndUpdate(req.params.id, {
            dataAlta: req.body.dataAlta,
            horaInici: req.body.horaInici,
            horaFinal: req.body.horaFinal,
            time: req.body.time,
            pai: req.body.pai,
            user: req.body.user,
            usuari: req.body.usuari,
            tipusActuacio: req.body.tipusActuacio,
            tasks: req.body.tasks,
            validada: req.body.validada
        })
        res.send('Actuacio Updated!')
    }
    catch (err) {
        console.error(err.message)
        res.send(400).send('Server Error')
    }
}

// DELETE ACTUACIO
const deleteActuacio = async function (req, res, next) {
    try {
        await ActuacioModel.findByIdAndDelete(req.params.id)
        res.json(' Actuació deleted.')
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
}

module.exports = { getAllActuacions, getActuacioById, createActuacio, putActuacio, deleteActuacio }
