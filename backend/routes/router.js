const express = require('express')
const router = express.Router()


const {
    getAllAd,
    getOneAd,
    registerUser,
    loginUser
} = require('./controller')

router.get('/',getAllAd)
router.get('/:card_id',getOneAd)
router.post('/register',registerUser)
router.post('/login',loginUser)

module.exports = router