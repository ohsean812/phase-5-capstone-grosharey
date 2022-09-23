import React from "react";
import { Link } from 'react-router-dom';

function GroceryCard( {grocery} ) {

    return (
        <div>
            <Link to={`/groceries/${grocery.id}`}><h4>{grocery.name} / ${grocery.price} / {grocery.quantity} / from {grocery.store}</h4></Link>
        </div>
    )
}

export default GroceryCard;
