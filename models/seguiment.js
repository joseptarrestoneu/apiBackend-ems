const mongoose = require('mongoose')
const { Schema } = mongoose

const SeguimentSchema = new Schema({

    descripcioSeguiment: String,
    dataAlta: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    usuari: {
        type: Schema.Types.ObjectId,
        ref: 'usuari'
    },
    dimensio: {
        type: Schema.Types.ObjectId,
        ref: 'dimensio'
    },
    afectacio: Number
}, { timestamps: true })

module.exports = mongoose.model('seguiment', SeguimentSchema)
