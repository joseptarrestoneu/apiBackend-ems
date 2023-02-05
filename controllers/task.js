const TaskModel = require('../models/task')

// GET TASK
const getAllTask = async function (req, res, next) {
    const task = await TaskModel.find()
    res.json({ task })
}

// GET TASK BY ID
const getTaskById = async (req, res) => {
    const { id } = req.params
    const task = await TaskModel.findById(id)
    res.json({ task })
}

// POT TASK
const createTask = function (req, res, next) {

    const newTask = new TaskModel()

    newTask.nomTasca = req.body.nomTasca
    newTask.descripcioTasca = req.body.descripcioTasca
    newTask.dataAlta = req.body.dataAlta
    newTask.dataBaixa = req.body.dataBaixa

    newTask.save((err, savedInfo) => {
        if (err) {
            console.log('Ha passat un error: ', err)
            return res.status(500).json({ error: err })
        }
        return res.json({ task: savedInfo })
    })
}

// PUT TASK
const putTask = async function (req, res, next) {
    try {
        await TaskModel.findByIdAndUpdate(req.params.id, {
            nomTasca: req.body.nomTasca,
            descripcioTasca: req.body.descripcioTasca,
            dataAlta: req.body.dataAlta,
            dataBaixa: req.body.dataBaixa
        })
    }
    catch (err) {
        console.error(err.message)
        res.send(400).send('Server Error')
    }
}

// DELETE TASK
const deleteTask = async function (req, res, next) {
    try {
        await TaskModel.findByIdAndDelete(req.params.id)
        res.json(' Task deleted.')
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
}


module.exports = { getAllTask, getTaskById, createTask, putTask, deleteTask }
