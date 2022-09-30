import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import { Error }

function Signup( {handleLogin} ) {

    const history = useHistory();

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ passwordConfirmation, setPasswordConfirmation ] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation
            })
        }).then(resp => resp.json())
        .then(() => history.push("/groceries"))
        // }).then(resp => {
        //     if (resp.ok) {
        //         resp.json().then(newUser => {handleLogin(newUser); history.push("/login")})
        //     } else {
        //         resp.json().then(error => setErrors([error]))
        //     }
        // })
    }

    return (
        <div className="background">
            <h1>hello signup!</h1>
            <form name="login" onSubmit={e => handleSubmit(e)}>
                <input autoComplete="off" type="text" placeholder="Create Username" name="username" onChange={e => setUsername(e.target.value)} /><br/>
                <input autoComplete="off" type="password" placeholder="Create Password" name="password" onChange={e => setPassword(e.target.value)} /><br/>
                <input autoComplete="off" type="password" placeholder="Confirm Password" name="password_confirmation" onChange={e => setPasswordConfirmation(e.target.value)} /><br/>
                <button type="submit">Register</button>
                {/* {errors.map(error => (
                    <Error key={error}>{error.error}</Error>
                ))} */}
            </form>
        </div>
    )
}

export default Signup;
