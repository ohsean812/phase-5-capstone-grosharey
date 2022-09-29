import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { Link } from 'react-router-dom';
import LatestImage from "./LatestImage";


function GroceryCard( {user, grocery, groceries, setGroceries} ) {

    const [image, setImage] = useState("")

    useEffect(() => {
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
        <div className="card">
            {user ? 
            (<Link to={`/groceries/${grocery.id}`}>
                <img src={image} alt="grocery_thumbnail" className="image_thumbnail" />
            </Link>)
            :
            (<Link to={'/'}>
                <img src={image} alt="grocery_thumbnail" className="image_thumbnail" />
            </Link>)
            }
            <div className="card-body">
                
            <h4 className="card-title">
                {grocery.name}
            </h4>
            <p className="card-text">    
                {grocery.quantity}<br/>
                ${grocery.price}<br/>
                {user && (user.username === grocery.owner) ? <Link to={`/groceries/${grocery.id}/edit`}><button>Edit</button></Link> : null}
                {user && (user.username === grocery.owner) ? <button onClick={handleDelete}>Delete</button> : null}
            </p>
            </div>
            <br/><br/>
        </div>
    )
}

export default GroceryCard;
