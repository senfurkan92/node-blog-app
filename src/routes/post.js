const router = require('express').Router()
const controller = require('../controllers/postController')
const multer  = require('multer')
const upload = multer()

router.put('/', upload.single('img'), controller.insert)
router.post('/', controller.readAll)
router.get('/:id', controller.read)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router;