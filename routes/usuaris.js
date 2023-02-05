const express = require('express')
const multer = require('multer')
const path = require('path')

const router = express.Router()

const userController = require('../controllers/usuari')

// GET USUARI
router.get('/', userController.getAllUsuaris)

// GET USUARI BY ID
router.get('/:id', userController.getUsuariById)

// POST USUARI
const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        )
    }
})

const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
})

router.post('/', imageUpload.single('image'), userController.createUsuari)

// PUT USUARI
router.put('/:id', userController.putUsuari)

// DELETE USUARI
router.delete('/:id', userController.deleteUsuari)

module.exports = router
