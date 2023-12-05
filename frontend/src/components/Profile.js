import React ,{useState,useEffect} from "react";
import {connect} from 'react-redux';
import Header from "./Header";
import '../Styles/Profile.css'
import {star} from '../img/star.png'
import {Button} from "@mui/material";
import { DeleteCart } from "../actions";
import  axios  from "axios"; 


function Profile(props) {
    console.log('props in Profile',props);

    let [savedReservations, setSavedReservations] = useState([]);

     function deleteReservedCard(uuid){
        console.log('uuid>>>>',uuid);
        props.Delete(uuid)
     }

    //  useEffect(()=>{
    //     // get saved reservations from database and write into savedReservations
    //     axios.get("http://localhost:4005/reservation")
    //     .then(response=>{
    //     let fetchedReservations = response.data;
    //     setSavedReservations([...fetchedReservations]);
    //     })
    //     },[]);
     

     const sendRequest=(item)=>{
        const day = Number(item?.days);
        let price = Number(item?.price);
        item.days=day;
        item.price=price;
        axios.post('http://localhost:4005/reservation',{item})
          .then(function (response) {
            console.log('response',response);
            let newState = [...savedReservations, response.data[0]]
            setSavedReservations(newState)
            console.log('savedReservations',savedReservations);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(()=>{
            deleteReservedCard(item.order_id)
          });
         
        }
        
    //     const getReservedRequest=(order_id)=>{
    //         axios.get('http://localhost:4005/reservation',{
    //             params:{
    //                 id: order_id
    //             }
    //         })
    //         .then(function (response) {
    //           console.log('response FromReservation',response);
    //           response.json()
    //         })
    //         .then(data=>{
    //             console.log('data from reservation',data);
    //         })
    //         .catch(function (error) {
    //           console.log(error);
    //         });
    //   }


console.log('reservation.......',savedReservations);
    return(
        <div className="profile">
        <Header/>
       { props.card?
       
        props.card?._todoProduct.Carts.map((item)=>{
            const day = Number(item?.days);
            console.log('item',item);
            let price = typeof item.price !== "string"? item.price : Number(item?.price?.substring(1));
                return(
                    
                        // <div key={item?.id}className="reserve_section">
                        //     <img src={item?.image}/>
                        //     <h2>{item?.id}</h2>
                        //     <p>{item?.name}</p>
                        //     <p>{item?.price}</p>
                        //     <p>Days:{item?.days}</p>
                        //     <p>rate:{item?.rating}</p>
                        //     <p>address:{item?.address}</p>
                        // </div>
                    
                        <div key={item?.id} className="reserve__section">
                            <div className="reserve_section_header">
                                <img src={item?.image}/>
                                <div className="reserve_section_header_center">
                                    <div>
                                        <p>{item?.name}</p>
                                        <p>address:{item?.address}</p>
                                    </div>
                                        <p>rate:{item?.rating}</p>
                                </div>
                            </div>
                            <h2>Price details</h2>
                            <div className="price_details">
                                <div className="price_details_left">
                                    <p>${item?.price} x {item?.days} nights</p>
                                    <p className="underscore">Cleaning fee</p>
                                    <p className="underscore">Click&Go service fee</p>
                                </div>
                                <div className="price_details_right">
                                    <p>${day * price}</p>
                                    <p>$20</p>
                                    <p>${day * price * 0.1}</p>
                                </div>
                            </div>
                                <div className="price_details_total">

                                    <div className="price_details_total-left">
                                            <p>Total (USD)</p>
                                    </div>
                                    <div className="price_details_total-right">
                                            <p>${(day * price) + 20 + (day * price * 0.1)}</p>
                                    </div>

                                </div>
                                <div className="reserve__section_buttons">
                                    <Button onClick={()=>deleteReservedCard(item?.order_id)} className="dlt_button">Delete</Button>
                                    <Button onClick={()=>sendRequest(item)}  className="sbt_button">Submit</Button>
                                </div>
                                
                            
                        </div>

)
})
     
    :'' }
           {/* <div className="reserved_items">
                {savedReservations.map()}
           </div> */}
        </div>
     ) 

       
}

function mapStateToProps(state){
   return  {card : state};
}

function mapDispatchToProps(dispatch){
    return{
       
        Delete:uuid => dispatch(DeleteCart(uuid))
     
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Profile);