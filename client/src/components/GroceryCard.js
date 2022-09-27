import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { Link } from 'react-router-dom';
import LatestImage from "./LatestImage";

function GroceryCard( {user, grocery, groceries, setGroceries} ) {

    // const { latestGrocery, setLatestGrocery } = useContext(AppContext);

    const [ image, setImage ] = useState("")
        
    useEffect(() => {
        // fetch(`/groceries/${grocery.id}`)
        fetch(`/images/${grocery.id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setImage(data.image_url);
            })
            .catch((error) => console.error(error));
    }, [])

    

    function handleDelete(e) {
        e.preventDefault()
        fetch(`/groceries/${grocery.id}`, {method: "DELETE"})
        .then(() => setGroceries(groceries.filter(groceryObj => groceryObj.id !== grocery.id)))
    }
    

    return (
        <div>
            <img src={image} alt="latest grocery" className="latest-image" />
            <Link to={`/groceries/${grocery.id}`}>Grocery Photo {grocery.id}</Link>
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
