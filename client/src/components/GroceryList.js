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
        <section style={{backgroundColor: '#eee'}}>
        <div className="text-center container py-5">
            {user ? <Link to='/groceries/new'>
            <div className="user_buttons">
            <span className="badge bg-primary ms-2">
                <h5>Add your grocery</h5>
            </span></div></Link> : null}
            <br/>
            <h1><u>hello grocery list!</u></h1>
            <h3 className="mt-4 mb-5"><strong>(Click the image to see the details)</strong></h3>

        {/* <div className="card_row"> */}
            <div className="row">
                {groceries.map(grocery => 
                    <div className="col-lg-4 col-md-12 mb-4">
                        <GroceryCard user={user} groceries={groceries} setGroceries={setGroceries} key={grocery.id} grocery={grocery} />
                    </div>
            )}
            </div>
            <br/><br/>

            {user ? <Link to='/groceries/new'>
            <div className="user_buttons">
            <span className="badge bg-primary ms-2">
                <h5>Add your grocery</h5>
            </span></div></Link> : null}
            <br/>
            
            </div>
            
            

        </section>
    )
}

export default GroceryList;