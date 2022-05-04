const categoryService =  require('../services/categoryService')

const read = async (req, resp, next) => {
    const result = await categoryService.read({
        id: Number(req.params.id)
    })   
    resp.json(result)
}

const readAll = async (req, resp, next) => {
    const result = await categoryService.readAll(req.body)   
    resp.json(result)
}

const insert = async (req, resp, next) => {
    const result = await categoryService.insert(req.body)
    resp.status(201).json(result)
}

const update = async (req, resp, next) => {
    const result = await categoryService.update({
        id: Number(req.params.id)
    }, req.body)
    resp.json(result)
} 

const remove = async (req, resp, next) => {
    const result = await categoryService.remove({
        id: Number(req.params.id)
    })
    resp.json(result)
}

module.exports = {
    read,
    readAll,
    insert,
    update,
    remove,
}