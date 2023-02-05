const UserModel = require('../models/user')

// GET USERS
const getAllUsers = async function (req, res, next) {
    const user = await UserModel.find().populate("rol")
    res.json({ user })
}

// GET USER BY ID
const getUserById = async (req, res) => {
    const { id } = req.params
    const user = await UserModel.findById(id)
    res.json({ user })
}

// POST USER
const createUser = function (req, res, next) {

    const newUser = new UserModel()

    newUser.dni = req.body.dni
    newUser.nom = req.body.nom
    newUser.dataAlta = req.body.dataAlta
    newUser.dataBaixa = req.body.dataBaixa
    newUser.email = req.body.email
    newUser.user = req.body.user
    newUser.password = req.body.password
    newUser.rol = req.body.rol

    newUser.save((err, savedInfo) => {
        if (err) {
            console.log('Ha passat un error: ', err)
            return res.status(500).json({ error: err })
        }
        return res.json({ user: savedInfo })
    })
}

// PUT USER
const putUser = async function (req, res, next) {
    try {
        await UserModel.findByIdAndUpdate(req.params.id, {
            dni: req.body.dni,
            nom: req.body.nom,
            dataAlta: req.body.dataAlta,
            dataBaixa: req.body.dataBaixa,
            email: req.body.email,
            user: req.body.user,
            password: req.body.password,
            rol: req.body.rol,
        })
        res.send('User Updated!')
    }
    catch (err) {
        console.error(err.message)
        res.send(400).send('Server Error')
    }
}

// DELETE USER
const deleteUser = async function (req, res, next) {
    try {
        await UserModel.findByIdAndDelete(req.params.id)
        res.json(' User deleted.')
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
}

module.exports = { getAllUsers, getUserById, createUser, putUser, deleteUser }
