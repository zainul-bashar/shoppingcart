import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/product.actions";
import { addToCart } from "../actions/cart.actions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () =>{

    const {loading, product, error} = useSelector(state => state.product)
    const dispatch = useDispatch();
    const navigate = useNavigate();

       useEffect(()=>{
        dispatch(fetchProducts())
        },[])

        const addProduct = (item) => {
            // console.log(item)
            dispatch(addToCart(item))
            navigate("/cart")
        }
       
    return(
        <div className="home-page">
         {
            product && (
                product.map((item)=>{
                    return(
                        <div className="products-div" key={item.id}>
                            <img src={item.thumbnail} alt="product"/>
                            <h1>Title: {item.title}</h1>
                            <h1>Price: {item.price}</h1>
                            <button onClick={()=>addProduct(item)}>Add To Cart</button>
                       </div>
                    )
                })
            )
         }
        </div>
    )
}

export default Home;