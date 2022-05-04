const postService = require('../services/postService')
const { uuidv4 } = require('../helpers')
const fs = require('fs')
const path = require('path')

const read = async (req, resp, next) => {
    const result = await postService.read({
        id: Number(req.params.id)
    })   
    resp.json(result)
}

const readAll = async (req, resp, next) => {
    const result = await postService.readAll(req.body)   
    resp.json(result)
}

const insert = async (req, resp, next) => {
    const guid = uuidv4()
    const fileName = `/uploads/${guid}.${req.file.mimetype.split('/')[1]}`
    const filePath = path.join(__dirname, '../../public/', fileName)
    fs.writeFile(filePath, req.file.buffer, (err) => console.log(err))
    req.body.authorId = Number(req.body.authorId)
    req.body.categoryId = Number(req.body.categoryId)
    const post = {
        ...req.body,
        imgPath: fileName
    }
    const result = await postService.insert(post)
    resp.status(201).json(result)
}

const update = async (req, resp, next) => {
    const result = await postService.update({
        id: Number(req.params.id)
    }, req.body)
    resp.json(result)
} 

const remove = async (req, resp, next) => {
    const result = await postService.remove({
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