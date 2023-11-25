const express = require('express')
const router = express.Router()


const {
    getAllAd,
    getAdById,
    registerUser,
    loginUser
} = require('./controller')

router.get('/',getAllAd)
router.get('/:Card',getAdById)
router.post('/register',registerUser)
router.post('/login',loginUser)

module.exports = router