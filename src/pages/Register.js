import React from 'react';
import {NavLink} from "react-router-dom";


const Register = () => {

    return (
        <form className='jumbotron'>
            <div className="form-group mx-sm-5 mb-2">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="form-group mx-sm-5 mb-2">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="form-group mx-sm-5 mb-2">
                <label htmlFor="exampleInputPassword1">Last name</label>
                <input type="text" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="form-group mx-sm-5 mb-2">
                <label htmlFor="exampleInputPassword1">Name</label>
                <input type="text" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="form-group form-check mx-sm-5 mb-2">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary mx-sm-5 mb-2">Submit</button>
        </form>
    )
}

export default Register;