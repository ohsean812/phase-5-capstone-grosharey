import React from "react";
import { NavLink } from "react-router-dom";

function NavBar( {user, handleLogout} ) {

    function onLogout() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(() => handleLogout())
    }

    return (
        <div>
            <NavLink path to ="/">Logo</NavLink>
            <NavLink path to ="/groceries">Groceries</NavLink>
            {user ? <NavLink path to="/logout" onClick={onLogout}>Logout</NavLink> : <NavLink path to ="/login">Login</NavLink>}
            <NavLink path to ="/signup">Register</NavLink>
        </div>
    )
}

export default NavBar;