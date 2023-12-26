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
    getUser,
    deleteReservation
} = require('./controller')


const authRouter = express.Router();
authRouter.get('/user',getUser)
authRouter.post('/sign-in',signIn)
authRouter.post('/sign-up',signUp)

router.get('/',getAllAd)
router.get('/:card_id',getOneAd)
router.get('/places/:name',getPlaces)
router.get('/reservation',getReservation)
router.post('/reservation',postReservation);
router.delete('/reservations/:reservationId', deleteReservation);




module.exports = router