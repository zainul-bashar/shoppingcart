import React from "react";
import Home from "./component/Home";
import './App.css'
import Cart from "./component/Cart";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return(
        <div>
            <nav className="nav"> 
            <div className="nav-1"> 
            <h2>Shoppping Cart</h2>  
            </div> 
            <div className="nav-2">                      
               <NavLink to="/" className='inactive' activeclassname='active'>Home Page</NavLink>
               <NavLink to="cart" className='inactive' activeclassname='active'>Cart Page</NavLink>
            </div> 
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="cart" element={<Cart/>}/>
            </Routes>
        </div>
    )
}

export default App;
 {/* <div className="nav-1">
                <h2>Shopping Cart</h2>
                </div>
                <div className="nav-2">
                <h2>Home Page</h2>
                <h2>Cart Page</h2>
                </div> */}