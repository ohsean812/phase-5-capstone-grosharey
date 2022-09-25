import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import GroceryComments from "./GroceryComments";

function GroceryDetail( {user, updateCommentsMasterState} ) {

    const history = useHistory()
    const params = useParams()

    const [grocery, setGrocery] = useState({})

    useEffect(() => {
        fetch(`/groceries/${params.id}`)
        .then(resp => resp.json())
        .then(showGrocery => setGrocery(showGrocery))
    }, [params.id])


    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`/grocery_comments/${params.id}`)
        .then(resp => resp.json())
        .then(showComments => setComments(showComments))
    }, [params.id])


    const [content, setContent] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setContent("")
        if (user) {
            fetch('/comments', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    content,
                    user_id: user.id,
                    grocery_id: params.id
                })
            })
                .then(resp => {
                    if (resp.ok) {
                        resp.json().then(returnComment => {
                            setComments(comments => [...comments, returnComment])
                            updateCommentsMasterState(returnComment)
                        })
                    }
                })
        } else {
            history.push('/unauthorized')
        }
        setContent("")
        e.target.reset()
    }

    const sortedComments = [...comments].sort((a,b) => a.id - b.id)
    const renderComments = sortedComments.map((comment) => <GroceryComments user={user} comment={comment} key={comment.id} />)


    return (
        <div>
            <h4>hello grocery detail!</h4>
            <h2>### This is where the photo should appear ###</h2>
            <h1>{grocery.name}</h1>
            <h1>Price: ${grocery.price}</h1>
            <h1>Quantity: {grocery.quantity}</h1>
            <h1>Purchased from: {grocery.store}</h1>
            <h1>Purchase Date: {grocery.date}</h1>
            <h1>Posted by: {grocery.owner}</h1>
            
            <h2>### This is where the rendered comments should appear ###</h2>
            {renderComments}

            <form onSubmit={handleSubmit}>
                <label htmlFor="chat">Chat </label>
                <input name="content" onChange={e => setContent(e.target.value)} value={content} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default GroceryDetail;
