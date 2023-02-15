const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const UserModel = require('../models/user')

passport.use(
    'signup',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                // check if user exists
                const userExists = await UserModel.findOne({ "email": email })
                if (userExists) {
                    return done(null, false)
                }
                // Create a new user with the user data provided
                const user = await UserModel.create({ email, password })
                return done(null, user)
            } catch (error) {
                done(error)
            }
        }
    )
)

passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                const user = await UserModel.findOne({ email })
                if (!user) {
                    return done(null, false, { message: 'User not found' })
                }
                const validate = await user.isValidPassword(password)
                if (!validate) {
                    return done(null, false, { message: 'Wrong Password' })
                }
                return done(null, user, { message: 'Logged in Successfully' })
            } catch (error) {
                console.log(error)
                return done(error, false)
            }
        }
    )
)

const JWTstrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

passport.use(
    new JWTstrategy(
        {
            secretOrKey: 'TOP_SECRET',
            jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
        },
        async (token, done) => {
            try {
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        }
    )
)