const mongoose = require('mongoose')
const { Schema } = mongoose

const UsuariSchema = new Schema({
    dni: String,
    nom: String,
    dataAlta: Date,
    dataBaixa: Date,
    servei: {
        type: Schema.Types.ObjectId,
        ref: 'servei'
    },
    imgUserUrl: String
}, { timestamps: true })

module.exports = mongoose.model('usuari', UsuariSchema)
