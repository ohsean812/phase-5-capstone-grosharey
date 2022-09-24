import React, { useState } from "react";
import { useHistory } from "react-router-dom"

function Login( {handleLogin} ) {

    const history = useHistory();

    const[ username, setUsername ] = useState("")
    const[ password, setPassword ] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                password
            })
        }).then(r=>{
            if (r.ok) {
                r.json().then(user=>{handleLogin(user); history.push('/groceries')})
            } else {
                r.json().then(err=>setErrors([err]))
            }
        }
    )}

    return (
        <div>
            <h1>hello login!</h1>
            <form name="login" onSubmit={(event) => handleSubmit(event)}>
                <input type="text" placeholder="Enter Username" name="username" onChange={(event) => setUsername(event.target.value)} />
                <input type="password" placeholder="Enter Password" name="password" onChange={(event) => setPassword(event.target.value)} />
                <button type="submit">Log in</button>
                {errors.map((err)=>
                <div key={err}>{err.error}</div>)}
            </form>
        </div>
    )
}

export default Login;
