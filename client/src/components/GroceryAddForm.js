import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import { useHistory, Link } from "react-router-dom";

function GroceryAddForm( {user} ) {

    const history = useHistory()

    // const [name, setName] = useState("")
    // const [price, setPrice] = useState("")
    // const [quantity, setQuantity] = useState("")
    // const [store, setStore] = useState("")
    // const [date, setDate] = useState("")
    const { latestGrocery, setLatestGrocery } = useContext(AppContext);

    function handleSubmit(e) {
        e.preventDefault()
        // if (!user) {user = {id: 0}}
        // fetch('/groceries', {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify({
        //         name,
        //         price,
        //         quantity,
        //         store,
        //         date,
        //         owner: user.username
        //     })
        // }).then(resp => {
        //     if (resp.ok) {
        //         resp.json().then(() => history.push('/groceries'))
        //     } else {
        //         // resp.json().then((error) => setErrors([error]))
        //         resp.json().then(() => history.push('/login'))
        //     }
        // })

        const data = new FormData();

        data.append("name", e.target.name.value);
        data.append("price", e.target.price.value);
        data.append("quantity", e.target.quantity.value);
        data.append("store", e.target.store.value);
        data.append("date", e.target.date.value);
        data.append("owner", user.username);
        data.append("image", e.target.image.files[0]);
        submitToApi(data);
    }


    function submitToApi(data) {
        
        if (!user) {user = {id: 0}}
        fetch("/groceries", {
            method: "POST",
            body: data
        })
            .then(resp => {
                if (resp.ok) {
                    resp.json()
            .then(data => {
                setLatestGrocery(data.image_url);
            })
            .then(() => history.push('/groceries'))
            .catch((error) => console.error(error));
        } else {
            // resp.json().then((error) => setErrors([error]))
            resp.json().then(() => history.push('/login'))
        }
    })
    }



    return (
        <div>
            <h1>hello form!</h1>
            {/* <form onSubmit = {handleSubmit}> */}
                {/* <input type="text" name="name" placeholder="Grocery Name" onChange={e=>setName(e.target.value)} /><br/>
                <input type="number" min="0" name="price" placeholder="Price" onChange={e=>setPrice(e.target.value)} /><br/>
                <input type="text" name="quantity" placeholder="Quantity (e.g. 5 oz.)" onChange={e=>setQuantity(e.target.value)} /><br/>
                <input type="text" name="store" placeholder="Store purchased from" onChange={e=>setStore(e.target.value)} /><br/>
                <input type="date" name="date" placeholder="Purchase Date" onChange={e=>setDate(e.target.value)} /><br/> */}

            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="name" placeholder="Grocery Name" id="name" /><br/>
                <input type="number" min="0" name="price" placeholder="Price" id="price" /><br/>
                <input type="text" name="quantity" placeholder="Quantity (e.g. 5 oz.)" id="quantity" /><br/>
                <input type="text" name="store" placeholder="Store purchased from" id="store" /><br/>
                <input type="date" name="date" placeholder="Purchase Date" id="date" /><br/>
                
                <label htmlFor="image">Image</label>
                <input type="file" name="image" id="image" /><br/>

                <button type="submit">Submit</button>
                <Link to={`/groceries`}><button>Cancel</button></Link>
                {/* {errors.map((err)=>(
                    <Error key={err}>{err.error}</Error>
                ))} */}
            </form>
        </div>
    )
}


export default GroceryAddForm;