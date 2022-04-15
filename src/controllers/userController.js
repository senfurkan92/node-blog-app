const userService =  require('../services/userService')

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
    const result = await userService.insert(req.body)
    resp.json(result)
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

module.exports = {
    read,
    readAll,
    insert,
    update,
    remove
}