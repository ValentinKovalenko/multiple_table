import React from 'react';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className='navbar bg-info'>
            <h3>Multiplication table</h3>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <NavLink className="nav-link active text-dark" aria-current="page" to="/login" >login</NavLink>
                    <NavLink className="nav-link text-dark" to="/register">Registration</NavLink>
                </div>
            </nav>
        </div>
            )
            }
            export default Header;