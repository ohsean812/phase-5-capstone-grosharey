import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function GroceryAddForm( {user} ) {

    const history = useHistory()

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [store, setStore] = useState("")
    const [date, setDate] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (!user) {user = {id: 0}}
        fetch('/groceries', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name,
                price,
                quantity,
                store,
                date,
                user_id: user.id
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
            <h1>hello form!</h1>
            <form onSubmit = {handleSubmit}>
                <input type="text" name="name" placeholder="Grocery Name" onChange={e=>setName(e.target.value)} /><br/>
                <input type="number" min="0" name="price" placeholder="Price" onChange={e=>setPrice(e.target.value)} /><br/>
                <input type="text" name="quantity" placeholder="Quantity (e.g. 5 oz.)" onChange={e=>setQuantity(e.target.value)} /><br/>
                <input type="text" name="store" placeholder="Store purchased from" onChange={e=>setStore(e.target.value)} /><br/>
                <input type="date" name="date" placeholder="Purchase Date" onChange={e=>setDate(e.target.value)} /><br/>
                <button type="submit">Submit</button>
                {/* {errors.map((err)=>(
                    <Error key={err}>{err.error}</Error>
                ))} */}
            </form>
        </div>
    )
}

export default GroceryAddForm