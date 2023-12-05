import React from "react";
import { useParams } from "react-router";
import { useState,useEffect,useRef } from "react";
import Search from "./Search";
import {Button} from "@mui/material";
import {AddCart} from '../actions'
import {connect} from 'react-redux';
import Profile from "./Profile";
import { Avatar } from '@mui/material';
import ReactDOM from 'react-dom';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Styles/CardDetails.css'
import { Routes,Route, Link } from "react-router-dom"
import Header from "./Header.js";
import CalendarBan from './CalendarBan.js'
import { FaStar } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

function CardDetails(props){
    const{event_id}=useParams();
    // console.log(event_id);
    const[card,setCard]=useState();
    const[days,setDays]=useState();
    // const [focusedImg, setFocusedImg] = useState(false);
    // const [defaultImg, setDefaultImg] = useState();
    const dayAmountInput = useRef();

    
    useEffect(()=>{
        fetch(`http://localhost:4005/cards/${event_id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log('27строчка',data);
            setCard(data)})
        
    },[]);

    function getReserve(){
        props.Add(card)
    };

    const setDayAmountInput = (e)=>{
        e.preventDefault();
        const inputValue= dayAmountInput.current.value
        console.log('inputValue',inputValue);
        setDays(inputValue);
        console.log('after SetDays',days);
        const updatedCard={...card,inputValue}
        console.log('43 line--->',updatedCard);
        setCard(updatedCard)
    }




    return(
    
    <>
     <Header/>
    <CalendarBan/>
  
    <div className="card_details">
           
           
         {card ?

                
                
                <div>
                    <h1> {card.name}</h1>    
                    <div className="pic-form"> 

                        <Carousel thumbWidth='150px' showArrows='true' axis="horizontal" width={750}>
                            <div >
                                <img src={card.event_img} className="carousel" />
                                <p className="legend">{card.name}</p>
                            </div>
                            <div>
                                <img src={card.event_img} className="carousel"/>
                                <p className="legend">{card.address}</p>
                            </div>
                            <div>
                                <img src={card.event_img} className="carousel"/>
                                <p className="legend">{card.phone_number}</p>
                            </div>
                        </Carousel> 
                        <form onChange={setDayAmountInput}>
                            <label for="quantity">Days amount:</label>
                            <input ref={dayAmountInput} min={1} defaultValue={0}  type="number" id="quantity" name="quantity" />
                        </form>
                    </div>    
                    <div className="flex-container">
                        <div className='heading-hold'>
                            <div>
                            <p className='text-xl '> Superhost. </p>
                            <p className="text">highly rated hosts who are committed to providing great stays for their guests.</p>
                            </div>
                            <div>
                            <p className='text-xl '>Great check-in experience.  </p>
                            <p className="text">90% of recent guests gave the check-in process a 10-star rating.</p>

                            </div>
                            <div>
                            <p className='text-xl '>Free cancellation for 48 hours. </p>
                            <p className="text">No questions asked.</p>

                            </div>
                        </div>

                        <div className="card_info">
                       
                            <h3> Address:{card.address},{card.city_name}/{card.country_name}</h3>
                            
                             <p> {<FaPhoneSquareAlt />}{card.phone_number}</p>
                             
                                <p className="text-xl">${card.price}/Night</p>
                                <p><FaStar/> {card.rating}</p>
                            
                            <p>Days amount :{days}</p>

                            <Button onClick={getReserve} className="reserve">Reserve</Button> 
                        </div>
                    </div>
                </div>
            :''}
        

        <Link to={`/profile`}><Avatar/></Link>
      
    </div>
    
        
   </> 
   
    )
}


const mapStateToProps = state =>{
    // console.log('state',state);
    // console.log('products',state._todoProduct);
    return {
        _products: state._todoProduct
    };
}

function mapDispatchToProps(dispatch){
    return{
       
        Add:card=>dispatch(AddCart(card))
     
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardDetails);