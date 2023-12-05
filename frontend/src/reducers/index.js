import { combineReducers } from 'redux';
import {ADD_CART, DELETE_CART} from  '../actions/index';


const initState= {
    
    Carts:[],
   
}


function todoProduct(state = initState,action){
    switch(action.type){
        
        case ADD_CART:
           
                let cart = {
                    id:action.payload.event_id,
                    name:action.payload.name,
                    image:action.payload.event_img,
                    price:action.payload.price,
                    days:action.payload.inputValue,
                    rating:action.payload.rating,
                    address:action.payload.address,
                    order_id:crypto.randomUUID()
                    
                } 
                return {...state,Carts:[...state.Carts,cart]}
                
            
            
            
           
            case DELETE_CART:
                console.log(action.payload);
                return{
                    ...state,
                   //cardt:[...[1,2,3]]
                    Carts:state.Carts.filter(item=>{
                        return item.order_id!=action.payload
                    })
                   
                }
        default:
            return state;
    }
}
const CardApp = combineReducers({
    _todoProduct:todoProduct
});
export default CardApp;