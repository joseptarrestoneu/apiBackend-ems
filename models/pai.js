const mongoose = require('mongoose')
const { Schema } = mongoose

const PaiSchema = new Schema({
    nomPai: String,
    dataAlta: Date,
    dataBaixa: Date
}, { timestamps: true })

module.exports = mongoose.model('pai', PaiSchema)
