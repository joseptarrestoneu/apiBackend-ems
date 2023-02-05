const mongoose = require('mongoose')
const { Schema } = mongoose

const ActuacioSchema = new Schema({

    dataAlta: Date,
    horaInici: Date,
    horaFinal: Date,
    time: Number,
    pai: {
        type: Schema.Types.ObjectId,
        ref: 'pai'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    usuari: {
        type: Schema.Types.ObjectId,
        ref: 'usuari'
    },
    tipusActuacio: {
        type: Schema.Types.ObjectId,
        ref: 'tipusActuacions'
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'task'
    }],
    validada: Boolean
}, { timestamps: true })

module.exports = mongoose.model('actuacio', ActuacioSchema)
