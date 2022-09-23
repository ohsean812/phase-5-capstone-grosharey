import React from "react";

function GroceryComments( {user, comment} ) {

    return (
        <div>
            <h1>hello grocery comments!</h1>
            {user}
            {comment}
        </div>
    )
}

export default GroceryComments