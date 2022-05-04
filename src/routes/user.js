const controller = require('../controllers/userController')
const router = require('express').Router()
const { auth } = require('../middlewares/auth')
const {
    user_update_validator,
    user_insert_validator,
} = require('../validations/user_validate')

router.put('/', user_insert_validator(), controller.insert)
router.post('/login', controller.login)
router.post('/', auth(), controller.readAll)
router.get('/:id', auth(), controller.read)
router.patch('/:id', auth(), user_update_validator(), controller.update)
router.delete('/:id', auth(), controller.remove)
router.get('/token/check', controller.tokenCheck)

module.exports = router
