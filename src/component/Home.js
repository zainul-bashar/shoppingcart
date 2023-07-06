import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/product.actions";
import { addToCart } from "../actions/cart.actions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const [isInCart, setIsInCart] = useState(false);
    const {loading, product, error} = useSelector(state => state.product)
    const dispatch = useDispatch();
    const navigate = useNavigate();

       useEffect(()=>{
        dispatch(fetchProducts())
        },[dispatch])

        const addProduct = (item) => {
            // console.log(item)
            // dispatch(addToCart(item))
            // navigate("/cart")
            if(isInCart){
                navigate("/cart") 
                setIsInCart(false)
            }
            else{
                dispatch(addToCart(item))
                setIsInCart(true) 
            }
            
        }
        if(loading) return <h1>Loading...</h1>
        if(error) return <h1>Error: {error}</h1>
        
           
          
            
            
       
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
                            <button onClick={()=>addProduct(item)}>{isInCart ? 'Go to Cart' : 'Add to Cart'}</button>
                       </div>
                    )
                })
            )
         }
        </div>
    )
}

export default Home;