import React from "react";
import Home from "./component/Home";
import './App.css'

const App = () => {
    return(
        <div>
            <nav className="nav">
                <div className="nav-1">
                <h2>Shopping Cart</h2>
                </div>
                <div className="nav-2">
                <h2>Home Page</h2>
                <h2>Cart Page</h2>
                </div>
            </nav>
            <Home/>
        </div>
    )
}

export default App;