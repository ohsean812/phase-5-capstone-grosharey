import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom";
import icon from '../icon.png'


function Login( {handleLogin} ) {

  const history = useHistory();

  const[ username, setUsername ] = useState("")
  const[ password, setPassword ] = useState("")
  const[ errors, setErrors ] = useState([])

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

  <section className="h-100 gradient-form" style={{backgroundColor: "#eee"}}>
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

                  <form name="login" onSubmit={(event) => handleSubmit(event)}>
                    
                    <p>Please login to your account</p>
                    
                    <div className="form-outline mb-4">
                      <input type="text" id="form2Example11" className="form-control" placeholder="Enter Username" name="username" onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    
                    <div className="form-outline mb-4">
                      <input type="password" id="form2Example22" className="form-control" placeholder="Enter Password" name="password" onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    
                    {errors.map((err) =>
                        <div key={err}>{err.error}</div>)}<br/>
                    
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button className="btn btn-outline-primary" type="submit">Log in</button>
                    </div>
                    
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Don't have an account?</p>
                      <NavLink exact to ="/signup">
                        <button type="button" className="btn btn-outline-danger">Create new</button>
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
    <br/><br/><br/><br/><br/><br/><br/>
  </section>
  )
}

export default Login;
