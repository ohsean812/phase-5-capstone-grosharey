import React from "react";


function GroceryComments( {comment} ) {

    return (
        <div>
            <h6>
            {comment.user.username} said: "
            <b>{comment.content}</b>
            " at {comment.created_at.slice(11,19)}
            </h6>
        </div>
    )
}

export default GroceryComments