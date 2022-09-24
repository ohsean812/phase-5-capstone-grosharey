import React from "react";

function GroceryComments( {user, comment} ) {

    return (
        <div>
            {comment.content}
        </div>
    )
}

export default GroceryComments