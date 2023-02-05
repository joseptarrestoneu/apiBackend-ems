const mongoose = require('mongoose')
const { Schema } = mongoose

const TipusSchema = new Schema({
    nomTipusActuacio: String,
    descripcioTipus: String,
    dataAlta: Date,
    dataBaixa: Date,
    durada: Number,
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'task'
    }]
}, { timestamps: true })

module.exports = mongoose.model('tipusActuacions', TipusSchema)
