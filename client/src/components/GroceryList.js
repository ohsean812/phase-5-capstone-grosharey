import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import GroceryCard from "./GroceryCard";
import LatestImage from "./LatestImage";


function GroceryList( {user, groceries, setGroceries} ) {

    useEffect(() => {
        fetch('/groceries')
        .then(resp => resp.json())
        .then(showGroceries =>setGroceries(showGroceries))
    }, [])

    return (
        <div>
            <h1><u>hello grocery list!</u></h1>
            {groceries.map(grocery => 
                <div>
                    <GroceryCard user={user} groceries={groceries} setGroceries={setGroceries} key={grocery.id} grocery={grocery} />
                </div>
            )}
            <br />
            <Link to='/groceries/new'>Add your grocery</Link>
        </div>
    )
}

export default GroceryList;