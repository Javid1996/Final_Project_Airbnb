const express = require('express')
const router = express.Router()


const {
    getAllAd,
    getOneAd,
    postReservation,
    getReservation,
    loginUser
} = require('./controller')

router.get('/',getAllAd)
router.get('/:card_id',getOneAd)
// router.post('/reservation',postReservation)
// router.get('/reservation',getReservation)
router.post('/login',loginUser)

module.exports = router 