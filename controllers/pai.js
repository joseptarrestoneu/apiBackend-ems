const PaiModel = require('../models/pai')

// GET PAIS
const getAllPais = async function (req, res, next) {
    const pai = await PaiModel.find()
    res.json({ pai })
}

// GET PAI BY ID
const getPaiById = async (req, res) => {
    const { id } = req.params
    const pai = await PaiModel.findById(id)
    res.json({ pai })
}

// POST PAI
const createPai = function (req, res, next) {

    const newPai = new PaiModel()

    newPai.nomPai = req.body.nomPai
    newPai.dataAlta = req.body.dataAlta
    newPai.dataBaixa = req.body.dataBaixa

    newPai.save((err, savedInfo) => {
        if (err) {
            console.log('Ha passat un error: ', err)
            return res.status(500).json({ error: err })
        }
        return res.json({ pai: savedInfo })
    })
}

// PUT PAI
const putPai = async function (req, res, next) {
    try {
        await PaiModel.findByIdAndUpdate(req.params.id, {
            nomPai: req.body.nomPai,
            dataAlta: req.body.dataAlta,
            dataBaixa: req.body.dataBaixa
        })
        res.send('Pai Updated!')
    }
    catch (err) {
        console.error(err.message)
        res.send(400).send('Server Error')
    }
}

// DELETE PAI
const deletePai = async function (req, res, next) {
    try {
        await PaiModel.findByIdAndDelete(req.params.id)
        res.json(' Pai deleted.')
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
}

module.exports = { getAllPais, getPaiById, createPai, putPai, deletePai }
