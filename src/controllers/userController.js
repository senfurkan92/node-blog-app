const userService =  require('../services/userService')
const { validationResult } = require('express-validator')
const { compare, hash } = require('../helpers/crypt')
const { sign, verify } = require('../helpers/jwt')

const read = async (req, resp, next) => {
    const result = await userService.read({
        id: Number(req.params.id)
    })   
    resp.json(result)
}

const readAll = async (req, resp, next) => {
    const result = await userService.readAll(req.body)   
    resp.json(result)
}

const insert = async (req, resp, next) => {
    const validation = validationResult(req)
    if(validation.isEmpty()) {
        req.body.password = await hash(req.body.password)
        const result = await userService.insert(req.body)
        resp.status(201).json(result)
    } else {
        const errors = validation.array().map(x => ({
            param: x.param,
            msg: x.msg,
            val: x.value
        }))
        resp.status(200).json(errors)
    }
}

const update = async (req, resp, next) => {
    const result = await userService.update({
        id: Number(req.params.id)
    }, req.body)
    resp.json(result)
} 

const remove = async (req, resp, next) => {
    const result = await userService.remove({
        id: Number(req.params.id)
    })
    resp.json(result)
}

const login = async (req, resp, next) => {
    const user = await userService.read({
        email: req.body.email
    })
    if (user && await compare(req.body.password, user.password)) {
        const result = {...user}
        delete result.password
        result.token = sign({
            id: result.id,
            email: result.email,
            isActive: result.isActive,
            emailConfirmed: result.emailConfirmed
        })
        resp.status(200).json(result)
    } else {
        resp.status(200).json(null)
    }
}

const tokenCheck = async (req, resp, next) => {
   const result = verify(req.headers.authorization);
   resp.json(result);
}

module.exports = {
    read,
    readAll,
    insert,
    update,
    remove,
    login,
    tokenCheck,
}