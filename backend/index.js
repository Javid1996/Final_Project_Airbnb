const express = require('express');
const app = express();
const router = require('./routes/router')
const cors = require('cors')
const {
  getReservation,
  postReservation,
  getPlaces,
  signIn,
  signUp,
  getUser,
  deleteReservation
} = require('./routes/controller')

const {verifyToken} = require('./middleware/authMiddleware')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(express.json());
app.use('/',router);
// app.use('/auth',router.authRouter);

app.get('/user',getUser)
app.post('/sign-in',signIn)
app.post('/sign-up',signUp)
app.get('/reservation',getReservation)
app.get('/places/:name',getPlaces)
app.post('/reservation',postReservation);
app.delete('/reservation/:reservationId', deleteReservation);

app.use(cors()); 



app.listen(4005,()=>{
    console.log('Server is running on port 4K');
});

