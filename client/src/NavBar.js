import React from "react";
import logo from './logo.jpeg'
import { NavLink } from "react-router-dom";

function NavBar( {user, handleLogout} ) {

    function onLogout() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(() => handleLogout())
    }

    return (
        <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
            <NavLink exact to ="/" className="navbar-brand">
                <img src={logo} alt="Logo" width="150" height="50" />
            </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink exact to ="/groceries" className="nav-link">Groceries</NavLink>
                </li>
                <li className="nav-item">
                    {user ? <NavLink exact to="/" className="nav-link" onClick={onLogout}>Logout</NavLink>
                    :
                    <NavLink exact to ="/login" className="nav-link">Login</NavLink>}
                </li>
                <li className="nav-item">
                    {user ? null : <NavLink exact to ="/signup" className="nav-link">Register</NavLink>}
                </li>
            </ul>
        </div>
        </div>
        </nav>


        // <div>
        //     <NavLink path to ="/">Logo</NavLink> / 
        //     <NavLink path to ="/groceries">Groceries</NavLink> / 
        //     {user ? <NavLink path to="/" onClick={onLogout}>Logout</NavLink> : <NavLink path to ="/login">Login</NavLink>} / 
        //     <NavLink path to ="/signup">Register</NavLink>
        // </div>
    )
}

export default NavBar;