const express = require('express');
const app = express();
const knex = require('knex');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
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
    .select('event_id','name','address','city.city_name as cityName','country.country_name as countryName','rating','phone_number','price','event_img','event_types as type')
    .from('events')
    .join('country','events.fk_country_id','=' ,'country.country_id')
    .join('city','events.fk_city_id','=' , 'city.city_id')
    .join('event_types','events.fk_type_id','=' ,'event_types.type_id')
    .then(item =>{
        // console.log('item',item)
        res.json(item) 
    }
    )
};


// const getAllAd = (req, res) => {
//     db('events as e')
//     .join('country as c', 'e.fk_country_id','c.country_id')
//     .select('e.name','e.price','c.country','e.address','e.event_img').where('e.fk_country_id','=','c.country_id')
//     .then(item =>
//             res.json(item)
//     )

// };

const getOneAd = (req, res) => {
    
    const id =Number(req.params.card_id);
    console.log('getOneParams',req.params); 

    db
    .select('*') 
    .from('events') 
    .join('country','events.fk_country_id','=' ,'country.country_id')
    .join('city','events.fk_city_id','=' , 'city.city_id')
    // .join('event_types','events.fk_type_id','=' ,'event_types.type_id')
    .where('event_id',id)
    .then(item =>{
        console.log('getOne',item)
        res.json(item[0]) 
    } 
    );

};

const getReservation =(req,res) =>{
    console.log('req',req);
    db
    .select('*') 
    .from('reservation') 
    .join('events','fk_event_id','=' ,'event_id')
    .join('country','events.fk_country_id','=' ,'country.country_id')
    .join('city','events.fk_city_id','=' , 'city.city_id')
    .then(item =>{
        console.log('reserved',item)
        res.json(item) 
    })
}

const postReservation = (req,res) =>{
    console.log('backend req',req.body);
    const reservation_uid=crypto.randomUUID();
    db('reservation')
    .insert({
        fk_event_id: req.body.item.id,
        days: req.body.item.days,
        total_price: (req.body.item.price*req.body.item.days)+(req.body.item.price*req.body.item.days*0.1)+20,
        // person_count: req.body.item.birth_date,
        order_id:req.body.item.order_id,
        reservation_uid:reservation_uid  
    })
    .then(item=>{ 
        db
        .select('*') 
        .from('reservation') 
        .join('events','fk_event_id','=' ,'event_id')
        .join('country','events.fk_country_id','=' ,'country.country_id')
        .join('city','events.fk_city_id','=' , 'city.city_id')
        .where('reservation_uid',reservation_uid)
        .then(item =>{
            console.log('reserved',item)
            res.send(item) 
        })}
        
        )
}


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
    getOneAd,
    postReservation,
    loginUser,
    getReservation

}