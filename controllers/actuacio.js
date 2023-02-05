const ActuacioModel = require('../models/actuacio')

// GET ACTUACIONS
const getAllActuacions = async function(res, req, next) {
    const actuacio = await ActuacioModel.find().populate('user').populate('usuari').populate('tipusActuacio').populate('tasks')
    res.json({ actuacio })
}