import productReducers from "./reducers/product.reducers";
import { combineReducers } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const rootReducer = combineReducers({
    product: productReducers,

})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;