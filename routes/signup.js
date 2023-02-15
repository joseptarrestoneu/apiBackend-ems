const express = require('express')
const passport = require('passport')
const router = express.Router()

const userSignupController = require('../controllers/signup')

// SIGNUP USER
router.post(
    '/signup', 
    passport.authenticate('signup', { session: false }), 
    userSignupController.signupUser
)

module.exports = router
