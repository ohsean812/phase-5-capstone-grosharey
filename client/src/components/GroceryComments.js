import React from "react";


function GroceryComments( {comment, user} ) {

    return (

        <div className="container text-center">

        <div className="row">

            <div className="col-lg-2">
            <div className="justify_left" style={{color: "darkgray"}}>
            {comment.user.username}
            </div>
            </div>

            {user && (comment.user.username === user.username) ?
            <div className="col-lg-4">
            <div className="justify_left">
            </div>
            </div>
            :
            <div className="col-lg-4">
            <div className="justify_left">
            <div className="imessage">
                <p className="from-them">{comment.content}</p>
            </div>
            </div>
            </div>
            }

            {user && (comment.user.username === user.username) ?
            <div className="col-lg-4">
            <div className="justify_right">
            <div className="imessage">
                <p className="from-me">{comment.content}</p>
            </div>
            </div>
            </div>
            :
            <div className="col-lg-4">
            <div className="justify_right">
            </div>
            </div>
            }

            <div className="col-lg-2">
            <div className="justify_right" style={{color: "darkgray"}}>
            {comment.created_at.slice(11,16)}
            </div>
            </div>

        </div>
        </div>
    )
}

export default GroceryComments