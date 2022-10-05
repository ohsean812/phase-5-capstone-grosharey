import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import icon from '../icon.png'

function Signup( {handleLogin} ) {

    const history = useHistory();

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ passwordConfirmation, setPasswordConfirmation ] = useState("");

    const[ errors, setErrors ] = useState([])

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
        // }).then(resp => resp.json())
        // .then(() => history.push("/groceries"))
        }).then(resp => {
            if (resp.ok) {
                resp.json().then(newUser => {handleLogin(newUser); history.push("/groceries")})
            } else {
                resp.json().then(error => setErrors([error]))
            }
        })
    }

    return (
    <section className="h-100 gradient-form" style={{backgroundColor: '#eee'}}>
    <br/><br/><br/>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">Share your groceries with <b>Gro<i style={{color: 'darkblue'}}>share</i>y</b>, a smarter way to shop!</h4>
                      <p className="small mb-0">Ever wondered if someone might need just the decent amount of grocery items that you wished you purchased in a decent amount as well, but ended up buying in "too much" quantities at Costco or other big warehouse club chains?  With <b>Gro<i style={{color: 'darkblue'}}>share</i>y</b>, you can sell & buy portion of groceries purchased in excessive quantities from warehouse club chains like Costco, Sam's Club, BJ's, etc.</p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img src={icon} style={{width: '185px'}} alt="grocery_icon" />
                        <h4 className="mt-1 mb-5 pb-1">Welcome to <b>Gro<i style={{color: 'darkblue'}}>share</i>y</b></h4>
                      </div>

                      <form name="login" onSubmit={e => handleSubmit(e)}>
                        <p>Sign up now!</p>
                        <div className="form-outline mb-4">
                          <input autoComplete="off" type="text" className="form-control" placeholder="Create Username" name="username" onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="form-outline mb-4">
                          <input autoComplete="off" type="password" className="form-control" placeholder="Create Password" name="password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="form-outline mb-4">
                          <input autoComplete="off" type="password" className="form-control" placeholder="Confirm Password" name="password_confirmation" onChange={e => setPasswordConfirmation(e.target.value)} />
                        </div>

                        {errors.map((err) =>
                            <p key={err}>{err.error}</p>)}
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button className="btn btn-outline-primary" type="submit">Sign up</button>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Already have an account?</p>
                          <NavLink exact to ="/login">
                          <button type="button" className="btn btn-outline-danger">Log in</button>
                          </NavLink>
                        </div>
                      </form>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        {/* <br/><br/> */}
    </section>
    )
}

export default Signup;
