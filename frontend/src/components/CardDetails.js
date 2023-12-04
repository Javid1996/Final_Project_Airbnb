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
            <form onChange={setDayAmountInput}>
            <label for="quantity">Days amount:</label>
            {/* <input type="number" id="quantity" name="quantity" min="1" max="5"/> */}
            <input ref={dayAmountInput} min={1} defaultValue={1}  type="number" id="quantity" name="quantity" />
            {/* <input ref={dayAmountInput} min={1} defaultValue={2}  type="number" id="quantity" name="quantity" /> */}
           
            </form>
            {/* {focusedImg === true ? <img src={defaultImg} /> :<img src={card.event_img} alt=''/>} */}
         {card ?

                
                
                <div>
                    <h1> {card.name}</h1>    

                    <Carousel width={500}>
                        <div >
                            <img src={card.event_img} className="carousel" />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src={card.event_img} className="carousel"/>
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src={card.event_img} className="carousel"/>
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel> 
                    <div className="card_info">
                        
                        <h3> Address:{card.address},{card.cityName}</h3>
                        <h3>{card.countryName}</h3>
                        <p>{card.phone_number}</p>
                        <p>{card.price}</p>
                        <p>Days amount :{days}</p>

                    </div>
                </div>
            :''}
        
        <Button onClick={getReserve} className="reserve">Reserve</Button> 

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