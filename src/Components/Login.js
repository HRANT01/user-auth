import React from "react";
import "./Login.css";
import {Link} from "react-router-dom"

function Login(){
    return(
        <div className="App">
        <form className='formin'>
            <h1>Log In</h1><hr/>
            <label>Username</label>
            <input></input><br/>
            <label>Password</label> 
            <input></input><br/>
            <button className='btn'>Login</button><br/>
            <Link to='/forg' className='forgoten'>Forgot Password</Link>
        </form>
        </div>
    )
}

export default Login;