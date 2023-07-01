import * as actions from './action.type'
import axios from "axios";

export const fetchProductrequest = ()=>{
    return(
        {
            type: actions.FETCH_REQUEST

        }
    )
}

export const fetchSuccess = (products)=>{
    return(
        {
            type: actions.FETCH_SUCCESS,
            payload: products
        }
    )
}

export const fetchError = (error)=>{
    return(
        {
            type: actions.FETCH_ERROR,
            payload: error
        }
    )
}

export const fetchProducts = () =>{
   return (dispatch)=>{
    dispatch(fetchProductrequest())
    axios.get('https://dummyjson.com/products')
    .then((response)=>dispatch(fetchSuccess(response.data.products)))
    .catch((error)=>dispatch(fetchError(error)))
   }
}