const RolModel = require('../models/rol')

// GET ROLS
const getAllRols = async function (req, res, next) {
    const rol = await RolModel.find()
    res.json({ rol })
}

// GET ROL BY ID
const getRolById = async (req, res) => {
    const { id } = req.params
    const rol = await RolModel.findById(id)
    res.json({ rol })
}

// POST ROL
const createRol = function (req, res, next) {

    const newRol = new RolModel()

    newRol.nomRol = req.body.nomRol

    newRol.save((err, savedInfo) => {
        if (err) {
            console.log('Ha passat un error: ', err)
            return res.status(500).json({ error: err })
        }
        return res.json({ rol: savedInfo })
    })
}

// PUT ROL
const putRol = async function (req, res, next) {
    try {
        await RolModel.findByIdAndUpdate(req.params.id, {
            nomRol: req.body.nomRol
        })
        res.send('Rol Updated!')
    }
    catch (err) {
        console.error(err.message)
        res.send(400).send('Server Error')
    }
}

// DELETE ROL
const deleteRol = async function (req, res, next) {
    try {
        await RolModel.findByIdAndDelete(req.params.id)
        res.json(' Rol deleted.')
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
}

module.exports = { getAllRols, getRolById, createRol, putRol, deleteRol }
