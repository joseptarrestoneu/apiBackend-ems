const SeguimentModel = require('../models/seguiment')

// GET SEGUIMENTS
const getAllSeguiments = async function (req, res, next) {
    const seguiment = await SeguimentModel.find().populate('user').populate('usuari').populate('dimensio')
    res.json({ seguiment })
}

// GET SEUGIMENT BY ID
const getSeguimentById = async (req, res) => {
    const { id } = req.params
    const seguiment = await SeguimentModel.findById(id)
    res.json({ seguiment })
}

// POST SEGUIMENT
const createSeguiment = function (req, res, next) {

    const newSeguiment = new SeguimentModel()

    newSeguiment.descripcioSeguiment = req.body.descripcioSeguiment
    newSeguiment.dataAlta = req.body.dataAlta
    newSeguiment.user = req.body.user
    newSeguiment.usuari = req.body.usuari
    newSeguiment.dimensio = req.body.dimensio
    newSeguiment.afectacio = req.body.afectacio

    newSeguiment.save((err, savedInfo) => {
        if (err) {
            console.log('Ha passat un error: ', err)
            return res.status(500).json({ error: err })
        }
        return res.json({ seguiment: savedInfo })
    })
}

// PUT SEGUIMENT
const putSeguiment = async function (req, res, next) {
    try {
        await SeguimentModel.findByIdAndUpdate(req.params.id, {
            descripcioSeguiment: req.body.descripcioSeguiment,
            dataAlta: req.body.dataAlta,
            user: req.body.user,
            usuari: req.body.usuari,
            dimensio: req.body.dimensio,
            afectacio: req.body.afectacio
        })
        res.send('Seguiment Updated!')
    }
    catch (err) {
        console.error(err.message)
        res.send(400).send('Server Error')
    }
}

// DELETE SEGUIMENT
const deleteSeguiment = async function (req, res, next) {
    try {
        await SeguimentModel.findByIdAndDelete(req.params.id)
        res.json(' Seguiment deleted.')
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
}

module.exports = { getAllSeguiments, getSeguimentById, createSeguiment, putSeguiment, deleteSeguiment }
