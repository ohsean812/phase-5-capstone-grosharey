import React from "react";
import { Link } from 'react-router-dom';
import LatestImage from "./LatestImage";

function GroceryCard( {user, grocery, groceries, setGroceries} ) {
    
    function handleDelete(e) {
        e.preventDefault()
        fetch(`/groceries/${grocery.id}`, {method: "DELETE"})
        .then(() => setGroceries(groceries.filter(groceryObj => groceryObj.id !== grocery.id)))
    }
    

    return (
        <div>
            <Link to={`/groceries/${grocery.id}`}>Grocery Photo {grocery.id}</Link>
            <LatestImage />
            <h4>
                {grocery.name} / 
                ${grocery.price} / 
                {grocery.quantity} / 
                from {grocery.store} / 
                {user && (user.username === grocery.owner) ? <Link to={`/groceries/${grocery.id}/edit`}><button>Edit</button></Link> : null} / 
                {user && (user.username === grocery.owner) ? <button onClick={handleDelete}>Delete</button> : null}
            </h4>
            <br/><br/>
        </div>
    )
}

export default GroceryCard;
