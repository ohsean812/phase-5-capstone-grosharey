import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import icon from '../icon.png'

function GroceryEditForm( {user, replaceUpdatedGrocery} ) {

    const history = useHistory()
    const params = useParams()

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [store, setStore] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState("")
    const [errors, setErrors] = useState([])


    useEffect(() => {
        fetch(`/groceries/${params.id}`)
        .then(resp => resp.json())
        .then(data => {setName(data.name); setPrice(data.price); setQuantity(data.quantity); setStore(data.store); setDate(data.date)})
    }, [params.id])


    function handleSubmit(e) {

        e.preventDefault()

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
        fetch(`/groceries/${params.id}`, {
            method: "PATCH",
            // headers: {"Content-Type": "application/json"},
            body: data
            // body: JSON.stringify({
            //     name,
            //     price,
            //     quantity,
            //     store,
            //     date,
            //     owner: user.username
            })
        .then(resp => {
            if (resp.ok) {
                resp.json().then(() => history.push('/groceries'))
                .catch((error) => console.error(error));
            } else {
                resp.json().then((error) => setErrors([error]))
                // resp.json().then(() => history.push('/login'))
            }
        })
    }


return (
    <section className="h-100 gradient-form" style={{backgroundColor: "#eee"}}>
    <br/><br/><br/>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                <div className="row g-0">

<div className="col-lg-12">
    <div className="card-body p-md-5 mx-md-4">
        <div className="text-center">
        <img src={icon} style={{width: '185px'}} alt="grocery_icon" />
        <h1>edit your <b><i style={{color: 'darkblue'}}>share</i></b>d grocery post</h1>
        <br/><br/>

        <div className="form_width">

            <form onSubmit = {(e) => handleSubmit(e)}>

                <div className="form_label">
                    <label>Grocery Name</label>
                    <input type="text" className="form-control" name="name" onChange={e=>setName(e.target.value)} value={name} id="name" /><br/>
                </div>

                <div className="form_label">
                    <label>Price</label>
                    <input type="number" className="form-control" min="0" name="price" onChange={e=>setPrice(e.target.value)} value={price} id="price" /><br/>
                </div>

                <div className="form_label">
                    <label>Quantity</label>
                    <input type="text" className="form-control" name="quantity" onChange={e=>setQuantity(e.target.value)} value={quantity} id="quantity" /><br/>
                </div>

                <div className="form_label">
                    <label>Store Purchsed From</label>
                    <input type="text" className="form-control" name="store" onChange={e=>setStore(e.target.value)} value={store} id="store" /><br/>
                </div>

                <div className="form_label">
                    <label>Purchase Date</label>
                    <input type="date" className="form-control" name="date" onChange={e=>setDate(e.target.value)} value={date} id="date" /><br/>
                </div>

                <div className="form_label">
                    <label>Replace Image</label>
                    <input type="file" className="form-control" name="image" onChange={e=>setImage(e.target.value)} value={image} id="image" /><br/>
                </div>

                {errors.map((err) =>
                <div key={err}>{err.errors}</div>)}

                <br/><button type="submit" className="btn btn-outline-success">Update</button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <button className="btn btn-outline-danger" onClick={history.goBack}>Cancel</button>

            </form>
        </div>
    </div>
</div>

                </div>
            </div>
        </div>
    </div>
</div>

        </div>
    </section>
    )
}

export default GroceryEditForm;