import React from "react";
import {Link, useState} from "react-router-dom"
function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 w-25 h-50 rounded">
                <h2>Login</h2>
                <form action="">
                    
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"><strong>Email address</strong></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"><strong>Password</strong></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter password" />
                    </div>
                    <div className="mb-3 d-grid gap-2">
                        <button type="button" name="" className="btn btn-primary">Login</button>
                    </div>
                    <div className="mb-3 d-grid gap-2">
                        <Link to='/signup' type="submit" name="" className="btn btn-secondary">Signup</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;