const express = require('express');
const app = express();
const router = require('./routes/router')
const cors = require('cors')
// app.get('/',(req,res)=>{
//     res.send('OK');
// })



app.use(express.json());
app.use('/',router);
app.use(cors());



app.listen(4000,()=>{
    console.log('Server is running on port 4K');
});

