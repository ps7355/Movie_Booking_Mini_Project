import React from "react";
import './exp.css';

function LoginScreen(){
    return <div>
        <div className="header">
        </div>
        <div className="login">
            <form action="">
                <h2>Log in to BookMyShow</h2>
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" />
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" />
                <button type="submit">Login</button>
                <p>Not a member yet? <a href="#">Sign up for free</a></p>
            </form>
        </div>
    </div>
}

export default LoginScreen;