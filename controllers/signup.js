const UserModel = require('../models/user')

// SIGNUP USER
const signupUser = function (req, res, next) {
    res.json({
        message: 'Signup successful',
        user: req.user
    })
}

module.exports = { signupUser }
