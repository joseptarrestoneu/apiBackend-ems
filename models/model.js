const mongoose = require('mongoose')
const { Schema } = mongoose

const RolSchema = new Schema({
    nomRol: String
}, { timestamps: true })

module.exports = mongoose.model('rol', RolSchema)
