import React from 'react';
import {NavLink} from "react-router-dom";


const Login = () => {
    return (
        <div className='jumbotron'>
            <form>
                <div className="form-group mx-sm-5 mb-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>

                </div>
                <div className="form-group mx-sm-5 mb-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <NavLink className="nav-link active text-dark form-group mx-sm-5 mb-2" to="/test">Login</NavLink>
            </form>
        </div>
    )
}

export default Login;
