import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import GroceryComments from "./GroceryComments";


function GroceryDetail( {user, groceries, setGroceries, updateCommentsMasterState} ) {

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
    const renderComments = sortedComments.map((commentObj) => <GroceryComments key={commentObj.id} comment={commentObj} user={user} />)
    

    const [ image, setImage ] = useState("")
        
    useEffect(() => {
        fetch(`/images/${params.id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setImage(data.image_url);
            })
            .catch((error) => console.error(error));
    }, [])

    function handleDelete(e) {
        e.preventDefault()
        fetch(`/groceries/${grocery.id}`, {method: "DELETE"})
        .then(() => setGroceries(groceries.filter(groceryObj => groceryObj.id !== grocery.id)))
        .then(() => history.push('/groceries'))
    }

    return (
    <section style={{backgroundColor: '#eee'}}>
        <br/><br/>

        <div className="text-center container py-5">
            <Link to='/groceries'>
            <div className="user_buttons">
            <span className="btn btn-outline-secondary">
                <h5>Back to List</h5>
            </span>
            </div></Link>

        <div>
            <h1><b>{grocery.name}</b></h1>
            <br/>

            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-5">
                    <img src={image} alt="grocery_image" className="image_detail" />
                </div>

                <div className="col-6 col-md-4">

                    <div className="justify_left">
                    <h3>Purchased from {grocery.store}</h3>
                    <h3>Purchase Date: {grocery.date}</h3>
                    <h3>Posted by {grocery.owner}</h3>
                    <br/><br/>
                    <h1 style={{color: "darkblue", display: 'inline'}}><b>${grocery.price}.00 </b></h1> <h3 style={{display: 'inline'}}>for {grocery.quantity}</h3>
                    </div>

            <div className="user_buttons">
                {user && (user.username === grocery.owner) ?
                    <Link to={`/groceries/${grocery.id}/edit`}>
                    <span className="btn btn-outline-secondary btn-sm">Edit</span>
                    </Link>
                : <br/>}
                &nbsp;
                {user && (user.username === grocery.owner) ?
                    <Link to={'/groceries'}>
                    <span className="btn btn-outline-secondary btn-sm" onClick={handleDelete}>Delete</span>
                    </Link>
                : null}
            </div>

                </div>
            </div>
            
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                  <div className="card rounded-3 text-black">
                    <div className="row g-0">

<div className="col-lg-12">
    <div className="card-body p-md-5 mx-md-4">
        <div className="text-center">

            <div className="form-control"><h3>Chat with other users about this item!</h3></div>
            <br/>
                {renderComments}
            <br/>

            <form onSubmit={handleSubmit}>
                <label htmlFor="chat"><b>Chat &nbsp;</b></label>
                
                <input autoComplete="off" name="content" className="form_width" onChange={e => setContent(e.target.value)} value={content} />
                <button type="submit">Send</button>
            </form>

        </div></div></div>
    </div></div></div></div></div>

        <Link to='/groceries'>
        <div className="user_buttons">
        <span className="btn btn-outline-secondary">
            <h5>Back to List</h5>
        </span>
        </div></Link>

        </div>
        </div>
    </section>
    )
}

export default GroceryDetail;