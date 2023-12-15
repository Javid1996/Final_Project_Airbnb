import React from "react";
import '../Styles/Card.css'
import { Link } from "react-router-dom";
// import {GradeIcon} from '@mui/material';

function Card(props) {
    const {event_img,event_id,name,address,price,countryName,rating,cityName} = props.element
    console.log('props',props);
    return(
        
        <div  className="card">
            <Link to={`/${event_id}`}>
                <img className="card_img" src={event_img} alt=''/>
            </Link>
                <div className="card__info ">
                    <h2>{name}</h2>
                    <h4>Address: {address},{cityName},{countryName}</h4>
                    
                    <h3>{price}/Day</h3>
                    <p>Rating {rating}</p>
                </div>
        </div>
            
    )
    
}


export default Card