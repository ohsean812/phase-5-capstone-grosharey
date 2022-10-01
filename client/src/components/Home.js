import React from "react";
import { NavLink } from "react-router-dom";

function Home( {user} ) {

    return (
        <div className="background">
            <h1><u>hello home!</u></h1>
            <h1>Welcome to GroSHAREy!</h1>
            <h3>GroSHAREy is an app that allows you to share & sell/buy portion of your groceries originally purchased in large quantities.</h3>
            {user ?
            <p>
            You are currently logged in as {user.username}.  Check back our <NavLink exact to ="/groceries"><button type="button" className="btn btn-warning">Grocery List</button></NavLink>
            </p>
            :
            <p>
            <NavLink exact to ="/login"><button type="button" className="btn btn-warning">Log In</button></NavLink> / 
            <NavLink exact to ="/signup"><button type="button" className="btn btn-warning">Register</button></NavLink> / 
            Just want to browse around? Check out our <NavLink exact to ="/groceries"><button type="button" className="btn btn-warning">Grocery List</button></NavLink>
            </p>}
        </div>
    )
}

export default Home;
