const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    dni: String,
    nom: String,
    dataAlta: Date,
    dataBaixa: Date,
    email: String,
    user: String,
    password: String,
    rol: {
        type: Schema.Types.ObjectId,
        ref: 'rol'
    }
}, { timestamps: true })

module.exports = mongoose.model('user', UserSchema)
