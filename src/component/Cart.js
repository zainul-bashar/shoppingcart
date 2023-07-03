import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart } from "../actions/cart.actions";

const Cart = () => {

    const cartProduct = useSelector(state => state.cart.products)
    const dispatch = useDispatch();
    //optional chaining
    // console.log(cartProduct)
    return(
        <div>
          <h1 className="msg">Want to add more products? CLICK ON HOME PAGE! </h1>
           {
            cartProduct && (
                cartProduct?.map((pro)=>{
                    return(
                        <div key={pro.id}>
                            <img src={pro.thumbnail} alt="pro" className="cart-img"/>
                            <h1>Title: {pro.title}</h1>
                            <h1>Price: {pro.price}</h1>
                            <button onClick={()=>dispatch(removeToCart(pro.id))}>Remove</button>
                        </div>

                    )
                })
            )
           }
        </div>
    )
}
export default Cart;
