import { ADD_TO_CART, REMOVE_TO_CART, CHECK_OUT } from "../actions/action.type"

const initialvalue = {
    products: [],
}

const cartReducers = (state = initialvalue, actions) =>{
    switch(actions.type){
        case ADD_TO_CART:
            return {...state, products: [...state.products, actions.payload]}
        case REMOVE_TO_CART:
            return {...state, products: state.products.filter(product => product.id !== actions.payload)}
        case CHECK_OUT:
            return {...state, products: []}
        default:
            return state;
    }
      
}
export default cartReducers;