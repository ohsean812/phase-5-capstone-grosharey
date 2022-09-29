import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import GroceryCard from "./GroceryCard";
// import LatestImage from "./LatestImage";


function GroceryList( {user, groceries, setGroceries} ) {

    useEffect(() => {
        fetch('/groceries')
        .then(resp => resp.json())
        .then(showGroceries =>setGroceries(showGroceries))
    }, [])

    return (
        <div>
            <h1><u>hello grocery list!</u></h1>
            <h4>(Click the image to see the details)</h4>
            {user ? <Link to='/groceries/new'><h3>Add your grocery</h3></Link> : null}
            <br/><br/>

            <div className="row">
                {groceries.map(grocery => 
                    <div className="col-lg-3 col-md-6">
                        <GroceryCard user={user} groceries={groceries} setGroceries={setGroceries} key={grocery.id} grocery={grocery} />
                    </div>
            )}
            </div>
            <br/><br/><br/>
        </div>
    )
}

export default GroceryList;