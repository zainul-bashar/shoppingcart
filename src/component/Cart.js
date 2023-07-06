import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart } from "../actions/cart.actions";
import Showing from "./ShowingPrice";


const Cart = () => {
     
    
    const cartProduct = useSelector(state => state.cart.products)
    const dispatch = useDispatch();
    //optional chaining
    // console.log(cartProduct)
     
    return(
        <div className="price-flex">
           <div className="cart-product-wrap">
          
         {
            cartProduct && (
                cartProduct?.map((pro)=>{
                    return(
                        <div key={pro.id} className="cart-div">
                            <img src={pro.thumbnail} alt="pro" className="checkout-img"/>
                            <h1>Title: {pro.title}</h1>
                            <h1>Price: {pro.price}</h1>
                            <button onClick={()=>dispatch(removeToCart(pro.id))} >Remove</button>
                        </div>

                    )
                })
            )
           }
            
        </div>
        <div className="check-out">
          <Showing prop={cartProduct}/>
        </div>
    
    </div>
    )
}
export default Cart;
