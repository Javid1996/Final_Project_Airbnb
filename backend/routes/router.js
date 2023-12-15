const express = require('express')
const router = express.Router()
const {verifyToken} = require('../middleware/authMiddleware')

const {
    getAllAd,
    getOneAd, 
    postReservation,
    getReservation,
    getPlaces,
    signIn,
    signUp,
    getUser
} = require('./controller')

router.get('/',getAllAd)
router.get('/:card_id',getOneAd)
router.get('/user',getUser)
router.get('/places/:name',getPlaces)
router.post('/sign-in',signIn)
router.post('/sign-up',signUp)
// router.post('/reservation',postReservation)
// router.get('/reservation',getReservation)
// router.post('/login',loginUser)


module.exports = router 