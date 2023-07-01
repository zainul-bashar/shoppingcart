import * as actionsCart from './action.type';

export const addToCart = (product) =>{
    return(
        {
            type: actionsCart.ADD_TO_CART,
            payload: product
        }
    )
}

export const removeToCart = (id)=>{
    return(
        {
            type: actionsCart.REMOVE_TO_CART,
            payload: id
        }
    )
}

export const checkOut = ()=>{
    return(
        {
            type: actionsCart.CHECK_OUT,

        }
    )
}