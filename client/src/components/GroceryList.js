import React from "react";
import { Link } from 'react-router-dom';
import GroceryCard from "./GroceryCard";


function GroceryList( {groceries} ) {

    return (
        <div>
            <h1><u>hello grocery list!</u></h1>
            {groceries.map(grocery => <GroceryCard key={grocery.id} grocery={grocery} />)}
            <br /><br /><br />
            <Link to='/groceries/new'>Add your grocery</Link>
        </div>
    )
}

export default GroceryList;