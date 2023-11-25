const express = require('express');
const app = express();
const router = require('./routes/router')

// app.get('/',(req,res)=>{
//     res.send('OK');
// })

app.listen(4000,()=>{
    console.log('Server is running on port 4K');
});

app.use(express.json());
app.use('/',router)

