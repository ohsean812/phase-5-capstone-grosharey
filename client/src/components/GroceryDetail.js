import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import GroceryComments from "./GroceryComments";
// import LatestImage from "./LatestImage";

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
    const renderComments = sortedComments.map((commentObj) => <GroceryComments comment={commentObj} key={commentObj.id} />)
    

    const [ image, setImage ] = useState("")
        
    useEffect(() => {
        fetch(`/images/${params.id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setImage(data.image_url);
            })
            .catch((error) => console.error(error));
    }, [])


    return (
        <div>
            <h4>hello grocery detail!</h4>
            <h2>### This is where the photo should appear ###</h2>
            <img src={image} alt="grocery_image" className="image_detail" />
            <h3>{grocery.name}</h3>
            <h3>Price: ${grocery.price}</h3>
            <h3>Quantity: {grocery.quantity}</h3>
            <h3>Purchased from: {grocery.store}</h3>
            <h3>Purchase Date: {grocery.date}</h3>
            <h3>Posted by: {grocery.owner}</h3>
            <br/><br/><br/>
            <h2>### This is where the rendered comments should appear ###</h2>
            {renderComments}
            <br/>

            <form onSubmit={handleSubmit}>
                <label htmlFor="chat">Chat </label>
                <input name="content" onChange={e => setContent(e.target.value)} value={content} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default GroceryDetail;