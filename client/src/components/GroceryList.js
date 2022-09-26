import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import GroceryCard from "./GroceryCard";


function GroceryList( {user, groceries, setGroceries} ) {

    useEffect(() => {
        fetch('/groceries')
        .then(resp => resp.json())
        .then(showGroceries =>setGroceries(showGroceries))
    }, [])

    return (
        <div>
            <h1><u>hello grocery list!</u></h1>
            {groceries.map(grocery => <GroceryCard user={user} groceries={groceries} setGroceries={setGroceries} key={grocery.id} grocery={grocery} />)}
            <br />
            <Link to='/groceries/new'>Add your grocery</Link>
        </div>
    )
}

export default GroceryList;