const express = require('express');
const app = express();
const router = require('./routes/router')
const cors = require('cors')
const {
  getReservation,
  postReservation
} = require('./routes/controller')
// app.get('/',(req,res)=>{
//     res.send('OK');
// })

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(express.json());
app.use('/cards',router);
app.use('/auth',router);
app.get('/reservation',getReservation)
app.post('/reservation',postReservation);
// app.use('/:',router)
app.use(cors()); 



app.listen(4005,()=>{
    console.log('Server is running on port 4K');
});

