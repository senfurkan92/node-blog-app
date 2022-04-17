const { body } = require('express-validator')
const userService = require('../services/userService')

exports.user_insert_validator = () => {
    return [
        body('email')
            .notEmpty().trim().withMessage('Email is required')
            .isEmail().trim().withMessage('Invalid email address')
            .custom(async (value) => {
                const user = await userService.read({
                    email: value
                })
                if(user) {
                    return Promise.reject('E-mail already in use')
                }
            }),
        body('password')
            .notEmpty().trim().withMessage('Password is required')
            .isStrongPassword({minSymbols:0}).trim().withMessage('Not strong password'),
    ]
}

exports.user_update_validator = () => {
    return [
        body('password')
            .notEmpty().trim().withMessage('Password is required')
            .isStrongPassword({minSymbols:0}).trim().withMessage('Not strong password'),
    ]
}