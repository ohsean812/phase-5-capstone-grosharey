import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";

function GroceryEditForm( {user, replaceUpdatedGrocery} ) {

    const history = useHistory()
    const params = useParams()

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [store, setStore] = useState("")
    const [date, setDate] = useState("")


    useEffect(() => {
        fetch(`/groceries/${params.id}`)
        .then(resp => resp.json())
        .then(data => {setName(data.name); setPrice(data.price); setQuantity(data.quantity); setStore(data.store); setDate(data.date)})
    }, [params.id])

    function handleSubmit(e) {
        e.preventDefault()
        if (!user) {user = {id: 0}}
        fetch(`/groceries/${params.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name,
                price,
                quantity,
                store,
                date,
                owner: user.username
            })
        }).then(resp => {
            if (resp.ok) {
                resp.json().then(() => history.push('/groceries'))
            } else {
                // resp.json().then((error) => setErrors([error]))
                resp.json().then(() => history.push('/login'))
            }
        })
    }



    return (
        <div>
            <h1>hello EDIT form!</h1>
            <form onSubmit = {handleSubmit}>
                <input type="text" name="name" onChange={e=>setName(e.target.value)} value={name} /><br/>
                <input type="number" min="0" name="price" onChange={e=>setPrice(e.target.value)} value={price} /><br/>
                <input type="text" name="quantity" onChange={e=>setQuantity(e.target.value)} value={quantity} /><br/>
                <input type="text" name="store" onChange={e=>setStore(e.target.value)} value={store} /><br/>
                <input type="date" name="date" onChange={e=>setDate(e.target.value)} value={date} /><br/>
                <button type="submit">Update</button>
                <Link to={`/groceries`}><button>Cancel</button></Link>
                {/* {errors.map((err)=>(
                    <Error key={err}>{err.error}</Error>
                ))} */}
            </form>
        </div>
    )
}

export default GroceryEditForm