const mongoose = require('mongoose')
const { Schema } = mongoose

const TaskSchema = new Schema({
    nomTasca: String,
    descripcioTasca: String,
    dataAlta: Date,
    dataBaixa: Date
}, { timestamps: true })

module.exports = mongoose.model('task', TaskSchema)
