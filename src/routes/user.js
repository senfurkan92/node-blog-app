const controller = require('../controllers/userController')
const router = require('express').Router()

router.post('/', controller.readAll)
router.get('/:id', controller.read)
router.patch('/:id', controller.update)
router.put('/', controller.insert)
router.delete('/:id', controller.remove)

module.exports = router
