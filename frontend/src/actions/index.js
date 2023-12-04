export const ADD_CART = 'ADD_CART' ;
export const DELETE_CART = 'DELETE_CART';


export function AddCart(payload){
    return {
        type:'ADD_CART',
        payload
    }
}


export function DeleteCart(payload){
    return{
        type:'DELETE_CART',
        payload
    }
}