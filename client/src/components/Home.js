import React from "react";
import { NavLink } from "react-router-dom";

function Home( {user} ) {

    return (
        <div className="home_contents">
            <h1>Welcome to <b>Gro<i style={{color: 'darkblue'}}>share</i>y</b></h1>
        <br/>
            <h3>Share your groceries with <b>Gro<i style={{color: 'darkblue'}}>share</i>y</b>, a smarter way to shop!</h3>
            <h4>Sell & buy portion of groceries purchased in large quantities from warehouse club chains like Costco, Sam's Club, BJ's, etc.</h4>
        <br/>
        
        {user ?
            <h5>
            You are currently logged in as {user.username}.  Check back our <NavLink exact to ="/groceries"><button type="button" className="btn btn-warning">Grocery List</button></NavLink>
            </h5>
            :
            <p>
            <br/>
                <div className="home_login">
                    <NavLink exact to ="/login"><button type="button" className="btn btn-warning">Log In</button></NavLink>
                </div>
                <div className="home_signup">
                    <NavLink exact to ="/signup"><button type="button" className="btn btn-warning">Register</button></NavLink>
                </div>
                <div className="home_groceries">
                    <h5>
                    Just want to browse around? Check out our <NavLink exact to ="/groceries"><button type="button" className="btn btn-warning">Grocery List</button></NavLink>
                    </h5>
                </div>
            </p>
        }
        </div>
    )

}

export default Home;
