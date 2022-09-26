import React from "react";


function GroceryComments( {comment} ) {

    return (
        <div>
            {comment.user.username} said: "
            <b>{comment.content}</b>
            " at {comment.created_at.slice(11,19)}
        </div>
    )
}

export default GroceryComments