const ServeiModel = require('../models/servei')

// GET SERVEIS
const getAllServeis = async function (req, res, next) {
    const servei = await ServeiModel.find()
    res.json({ servei })
}

// GET SERVEI BY ID
const getServeiById = async (req, res) => {
    const { id } = req.params
    const servei = await ServeiModel.findById(id)
    res.json({ servei })
}

// POST SERVEI
const createServei = function (req, res, next) {

    const newServei = new ServeiModel()

    newServei.nomServei = req.body.nomServei

    newServei.save((err, savedInfo) => {
        if (err) {
            console.log('Ha passat un error: ', err)
            return res.status(500).json({ error: err })
        }
        return res.json({ servei: savedInfo })
    })
}

// PUT SERVEI
const putServei = async function (req, res, next) {
    try {
        await ServeiModel.findByIdAndUpdate(req.params.id, {
            nomServei: req.body.nomServei
        })
        res.send('Servei Updated!')
    }
    catch (err) {
        console.error(err.message)
        res.send(400).send('Server Error')
    }
}

// DELETE SERVEI
const deleteServei = async function (req, res, next) {
    try {
        await ServeiModel.findByIdAndDelete(req.params.id)
        res.json(' Servei deleted.')
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
}

module.exports = { getAllServeis, getServeiById, createServei, putServei, deleteServei }
