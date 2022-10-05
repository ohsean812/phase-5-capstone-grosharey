import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import icon from '../icon.png'

function GroceryAddForm( {user} ) {

    const history = useHistory()

    const[ errors, setErrors ] = useState([])

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
        fetch("/groceries", {
            method: "POST",
            body: data
        })
            .then(resp => {
                if (resp.ok) {
                    resp.json()
            .then(() => history.push('/groceries'))
            .catch((error) => console.error(error));
        } else {
            // resp.json().then(() => history.push('/login'))
            resp.json().then(err=>setErrors([err]))
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
        <h1>add your grocery to <b><i style={{color: 'darkblue'}}>share</i></b></h1>
        <br/><br/>

        <div className="form_width">

            <form onSubmit={(e) => handleSubmit(e)}>
                
                <div className="form_label">
                    <label>Grocery Name</label>
                    <input type="text" className="form-control" name="name" id="name" /><br/>
                </div>

                <div className="form_label">
                    <label>Price</label>
                    <input type="number" className="form-control" min="0" name="price" id="price" /><br/>
                </div>

                <div className="form_label">
                    <label>Quantity</label>
                    <input type="text" className="form-control" name="quantity" id="quantity" /><br/>
                </div>

                <div className="form_label">
                    <label>Store Purchsed From</label>
                    <input type="text" className="form-control" name="store" id="store" /><br/>
                </div>

                <div className="form_label">
                    <label>Purchase Date</label>
                    <input type="date" className="form-control" name="date" id="date" /><br/>
                </div>

                <div className="form_label">
                    <label>Upload Image</label>
                    <input type="file" className="form-control" name="image" id="image" /><br/><br/>
                </div>

                <button type="submit" className="btn btn-outline-success">Submit</button>
                <Link to={`/groceries`}><button className="btn btn-outline-danger">Cancel</button></Link>
            
                {/* {errors.map((err)=>(
                    <Error key={err}>{err.error}</Error>
                ))} */}
                {errors.map((err) =>
                <div key={err}>{err.error}</div>)}

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


export default GroceryAddForm;