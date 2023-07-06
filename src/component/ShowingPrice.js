import React,{useState,useEffect} from "react";
import { checkOut } from "../actions/cart.actions";
import { useDispatch } from "react-redux";

const Showing = ({prop}) => {

    const dispatch = useDispatch();
    const[totalPrice,setTotalPrice] = useState();
    // const[productObj,setProductObj] = useState(prop)

    useEffect(()=>{
        const total = () => {
            setTotalPrice(prop.reduce((total,currentValue) => total + currentValue.price,0))
           }
           total()
    },[prop])

    // const checkOutFnc = () => {
    //     dispatch(checkOut)
    //     //  setProductObj('')
    //     //  setTotalPrice('')
    // } 
  
   
    return(
        <div>
         <div className="main-checkout">
            {
                prop && (
                    prop.map((item)=>{
                        return(
                            <div className="checkout-flex">
                              <h3>{item.title}</h3>
                              <h3>{item.price}</h3>
                            </div>
                        )
                    })
                )
            }
            
          </div>
          <div className="total-price">
          <h3>Total</h3>
          <h2>{totalPrice}</h2>
          </div>
          <button className="checkout-btn" onClick={()=> dispatch(checkOut())}>Check Out</button>
        </div>
    )
}
export default Showing;