import React from "react";
import '../Styles/Card.css'

function Card(props) {
    const {event_img,name,address,price,fk_country_id} = props
    return(
        <div className="card">
            <img src="event_img" alt=''/>
            <h4>{name}</h4>
            <p>Address: {address}</p>
            <p>Country: {fk_country_id}</p>
            <h5>{price}/Day</h5>
        </div>
    )
    
}


export default Card