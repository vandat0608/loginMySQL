import React from "react";
import {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
function Signup() {
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
      });
    // Xử lý nhập 
    const handleInput = (event) => {
        setValues((prev) => ({
          ...prev, [event.target.name]: [event.target.value]
        }))
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 w-25 h-50 rounded">
                <h2>Signup</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label"><strong>Name</strong></label>
                        <input 
                        onChange={handleInput}
                        type="email" 
                        className="form-control" 
                        name="name" 
                        id="exampleFormControlInput1" 
                        placeholder="Enter name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" class="form-label"><strong>Email address</strong></label>
                        <input onChange={handleInput} type="email" class="form-control" name="email" id="exampleFormControlInput1" placeholder="Enter email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" class="form-label"><strong>Password</strong></label>
                        <input onChange={handleInput} type="email" class="form-control" name="password" id="exampleFormControlInput1" placeholder="Enter password" />
                    </div>
                    <div className="mb-3 d-grid gap-2">
                        <button type="submit" name="" className="btn btn-primary">Signup</button>
                    </div>
                    <div className="mb-3 d-grid gap-2">
                        <Link to='/login' type="button" name="" className="btn btn-secondary">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Signup;