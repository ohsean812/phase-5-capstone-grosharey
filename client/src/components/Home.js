import React from "react";
import { NavLink } from "react-router-dom";

function Home() {

    return (
        <div>
            <h1><u>hello home!</u></h1>
            <h1>Welcome to GroSHAREy!</h1>
            <h3>GroSHAREy is an app that allows you to share & sell/buy portion of your groceries originally purchased in large quantities.</h3>
            <NavLink path to ="/login">Log In</NavLink> / 
            <NavLink path to ="/signup">Register</NavLink> / 
            Just want to browse around? Check out our <NavLink path to ="/groceries">Grocery List</NavLink>
        </div>
    )
}

export default Home;
