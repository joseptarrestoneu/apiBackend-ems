const mongoose = require('mongoose')
const { Schema } = mongoose

const DimensioSchema = new Schema({
    nomDimensio: String
}, { timestamps: true })

module.exports = mongoose.model('dimensio', DimensioSchema)
