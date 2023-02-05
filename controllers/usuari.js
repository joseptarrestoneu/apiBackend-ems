require('dotenv').config()
const path = require('path')

const UsuariModel = require('../models/usuari')

const host = process.env.APP_HOST
const port = process.env.APP_PORT

// GET USUARIS
const getAllUsuaris = async function (req, res, next) {
    const usuari = await UsuariModel.find().populate("servei")
    res.json({ usuari })
}

// GET USUARI BY ID
const getUsuariById = async (req, res) => {
    const { id } = req.params
    const usuari = await UsuariModel.findById(id)
    res.json({ usuari })
}

// POST USUARI
const createUsuari = function (req, res, next) {

    const pathUrl = host + ':' + port + '/images/' + req.file.filename

    const newUsuari = new UsuariModel()

    newUsuari.dni = req.body.dni
    newUsuari.nom = req.body.nom
    newUsuari.dataAlta = req.body.dataAlta
    newUsuari.dataBaixa = req.body.dataBaixa
    newUsuari.servei = req.body.servei
    newUsuari.imgUserUrl = pathUrl

    newUsuari.save((err, savedInfo) => {
        if (err) {
            console.log('Ha passat un error: ', err)
            return res.status(500).json({ error: err })
        }
        return res.json({ usuari: savedInfo })
    })
}

// PUT USUARI
const putUsuari = async function (req, res, next) {
    try {
        await UsuariModel.findByIdAndUpdate(req.params.id, {
            dni: req.body.dni,
            nom: req.body.nom,
            dataAlta: req.body.dataAlta,
            dataBaixa: req.body.dataBaixa,
            servei: req.body.servei,
        })
        res.send('Usuari Updated!')
    }
    catch (err) {
        console.error(err.message)
        res.send(400).send('Server Error')
    }
}

// DELETE USER
const deleteUsuari = async function (req, res, next) {
    try {
        await UsuariModel.findByIdAndDelete(req.params.id)
        res.json(' Usuari deleted.')
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
}

module.exports = { getAllUsuaris, getUsuariById, createUsuari, putUsuari, deleteUsuari }
