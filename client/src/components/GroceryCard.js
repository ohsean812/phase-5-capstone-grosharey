import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../App";
import { Link } from 'react-router-dom';
// import LatestImage from "./LatestImage";


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

            <div className="user_buttons">
                {user && (user.username === grocery.owner) ?
                    <Link to={`/groceries/${grocery.id}/edit`}>
                    <span className="btn btn-outline-secondary btn-sm">Edit</span>
                    </Link>
                : <br/>}
                {user && (user.username === grocery.owner) ?
                    <Link to={'/groceries'}>
                    <span className="btn btn-outline-secondary btn-sm" onClick={handleDelete}>Delete</span>
                    </Link>
                : null}
            </div>

            {user ? 
            (<Link to={`/groceries/${grocery.id}`}>
                <div className="article-container">
                <div className="article-img-holder">
                    <img src={image} alt="grocery_thumbnail" className="image_thumbnail" />
                </div>
                </div>
            </Link>)
            :
            (<Link to={'/'}>
                <div className="article-container">
                <div className="article-img-holder">
                    <img src={image} alt="grocery_thumbnail" className="image_thumbnail" />
                </div>
                </div>
            </Link>)
            }

            <div className="card-body">
            <h3 className="card-title mb-3"><b>{grocery.name}</b></h3>
            <p className="card-text">
                <h5>{grocery.quantity}</h5>
                <h5><b>${grocery.price}.00</b></h5><br/>
            </p>
            </div>

        
        </div>
    )
}

export default GroceryCard;
