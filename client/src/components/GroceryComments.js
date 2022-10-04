import React from "react";


function GroceryComments( {comment} ) {

    return (
        <div className="container text-center">
        <div className="row">

            <div className="col-lg-4">
            {comment.user.username}
            </div>

            <div className="col-lg-4">
            <b>{comment.content}</b>
            </div>

            <div className="col-lg-4">
            {comment.created_at.slice(11,19)}
            </div>

        </div>
        </div>
    )
}

export default GroceryComments