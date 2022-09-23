import React from "react";
import { NavLink } from "react-router-dom";

function Home() {

    return (
        <div>
            <h1><u>hello home!</u></h1>
            <h1>Welcome to GroSHAREy</h1>
            <h2>GroSHAREy is an app that will allow you to sell/buy portion of groceries coming in large amount.</h2>
            <NavLink path to ="/login">Log In</NavLink> / 
            <NavLink path to ="/signup">Register</NavLink> / 
            Just want to browse around? Check out our <NavLink path to ="/groceries">Grocery List</NavLink>
        </div>
    )
}

export default Home;
