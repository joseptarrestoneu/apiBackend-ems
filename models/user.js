const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    dni: String,
    nom: String,
    dataAlta: Date,
    dataBaixa: Date,
    email: {
        type: String,
        required: true,
        unique: true
    },
    user: String,
    password: {
        type: String,
        required: true
    },
    rol: {
        type: Schema.Types.ObjectId,
        ref: 'rol'
    }
}, { timestamps: true })

UserSchema.pre(
    'save',
    async function(next) {
      const user = this
      const hash = await bcrypt.hash(this.password, 10)
      this.password = hash
      next()
    }
)

UserSchema.methods.isValidPassword = async function(password) {
    const user = this
    const compare = await bcrypt.compare(password, user.password)
    return compare
}

module.exports = mongoose.model('user', UserSchema)
