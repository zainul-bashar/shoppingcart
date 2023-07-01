import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from "../actions/action.type";

const initialvalue = {
    loading: false,
    product: [],
    error: ''
}

const productReducers = (state=initialvalue, action)=>{
    switch(action.type){
        case FETCH_REQUEST:
            return {...state, loading: true}
        case FETCH_SUCCESS:
            return {...state, loading: false, product: action.payload, error: ''}
        case FETCH_ERROR:
            return {...state, loading: false, product: [], error: action.payload}
        default:
            return state
    }
}

export default productReducers;