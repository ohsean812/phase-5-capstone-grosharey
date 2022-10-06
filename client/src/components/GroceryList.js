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
<section style={{backgroundColor: '#eee'}}>
    <br/><br/>
        <div className="text-center container py-5">
            {user ? <Link to='/groceries/new'>
            <div className="user_buttons">
            <span className="btn btn-outline-primary">
                <h5>Add your grocery</h5>
            </span></div></Link> : null}

        <div className="justify_left">
            <h1><strong>Groceries</strong></h1>
            <h5>Click on the image to see details</h5>
            <p className="mt-4 mb-5" style={{color: "#696969"}}>{groceries.length} products</p>
        </div>

        <div className="row">
            {groceries.map(grocery => 
                <div className="col-lg-4 col-md-12 mb-4">
                    <GroceryCard user={user} groceries={groceries} setGroceries={setGroceries} key={grocery.id} grocery={grocery} />
                </div>
            )}
        </div>
    <br/>

        {user ? <Link to='/groceries/new'>
            <div className="user_buttons">
            <span className="btn btn-outline-primary">
                <h5>Add your grocery</h5>
            </span>
            </div>
            </Link>
        : null}
            
        </div>
</section>
    )
}

export default GroceryList;
