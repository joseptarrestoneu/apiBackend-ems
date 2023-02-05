const mongoose = require('mongoose')
const { Schema } = mongoose

const ServeiSchema = new Schema({
    nomServei: String
}, { timestamps: true })

module.exports = mongoose.model('servei', ServeiSchema)
