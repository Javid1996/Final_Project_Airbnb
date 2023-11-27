const express = require('express');
const app = express();
const knex = require('knex');
const bcrypt = require('bcrypt');

const saltRounds = 10;
app.use(express.json());


const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'neapolneapol1',
        database: 'airbnb',
        port: 5432
    }
});

app.set("db", db);


const getAllAd = (req, res) => {
    db
    .select().from('events')
    .then(item =>
            res.json(item)
    )

};

const getAdById = (req, res) => {
    
    const id =Number(req.params.event_id);
    console.log(req.params);
    db
    .select().from('events')
    .where('id', id)
    .then(item =>
        res.send(item)
    );

};

const registerUser = (req,res)=>{
    const cryptedPass = bcrypt.hashSync(req.body.password,saltRounds);
    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        birth_date: req.body.birth_date,
        email: req.body.email,
        password:cryptedPass

      };
 
    db('users')
    .insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        birth_date: req.body.birth_date,
        email: req.body.email,
        password:cryptedPass    
    })
    .then(item=>
        res.send(item)
        )

};

const loginUser = (req,res)=>{
const{reqUsername,reqPassword}=req.body;
db("users").select()
.where({username: reqUsername})
.then(item=>{
    if(item.length>0){
        if(bcrypt.compareSync(reqPassword,password)){
            res.send(`wellcome`)
        }else{
            res.send(`wrong`)
        }}

    })
}





module.exports = {
    getAllAd,
    getAdById,
    registerUser,
    loginUser

}