import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/product.actions";
import { useEffect } from "react";

const Home = () =>{

    const {loading, product, error} = useSelector(state => state.product)
    const dispatch = useDispatch();

       useEffect(()=>{
        dispatch(fetchProducts())
        },[])
       
    return(
        <div className="home-page">
         {
            product && (
                product.map((item)=>{
                    return(
                        <div className="products-div" key={item.id}>
                            <img src={item.thumbnail} alt="product-image"/>
                            <h1>Title: {item.title}</h1>
                            <h1>Price: {item.price}</h1>
                            <button>Add To Cart</button>
                       </div>
                    )
                })
            )
         }
        </div>
    )
}

export default Home;