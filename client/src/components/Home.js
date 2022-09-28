import React from "react";
import { NavLink } from "react-router-dom";

function Home() {

    return (
        <div>
            <h1><u>hello home!</u></h1>
            <h1>Welcome to GroSHAREy!</h1>
            <h3>GroSHAREy is an app that allows you to share & sell/buy portion of your groceries originally purchased in large quantities.</h3>
            <NavLink path to ="/login"><button type="button" class="btn btn-warning">Log In</button></NavLink> / 
            <NavLink path to ="/signup"><button type="button" class="btn btn-warning">Register</button></NavLink> / 
            Just want to browse around? Check out our <NavLink path to ="/groceries"><button type="button" class="btn btn-warning">Grocery List</button></NavLink>
        </div>
    )
}

export default Home;
