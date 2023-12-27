import React from "react";
import {useState} from "react";
import '../Styles/Banner.css'
import {Button} from "@mui/material" 
// import { IoHomeOutline } from "react-icons/io5";
import { MdMapsHomeWork } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { TbHomeEco } from "react-icons/tb";
import { FaHouseFloodWater } from "react-icons/fa6";




function Banner({setPlaceType}){
   
    const handleButtonClick = (placeType) => {
        setPlaceType(placeType);
    };

    return(
        <div className="banner">
            
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you</h5>

                <Button variant="outlined" onClick={() => handleButtonClick('flat')} >{<MdMapsHomeWork className="type_icon"/>}</Button>
                <Button variant="outlined" onClick={() => handleButtonClick('house')} >{<IoHomeSharp className="type_icon"/>}</Button>
                <Button variant="outlined" onClick={() => handleButtonClick('countryhouse')}>{<TbHomeEco className="type_icon"/>}</Button>
                <Button variant="outlined" onClick={() => handleButtonClick('seaside')}>{<FaHouseFloodWater className="type_icon"/>}</Button>
                
            </div>
        </div>
    )
}

export default Banner