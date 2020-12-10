import React from 'react';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className='navbar bg-info'>
            <div>
                <h3>Multiplication table</h3>
            </div>

                <div>
                <input type='email' className="form-control" placeholder='Введіть email'/>
                </div>
            <div>
                <input type='password' className="form-control" placeholder='Введіть пароль'/>
            </div>
               <div>
                <NavLink className='text-dark ' to="/test">Login</NavLink>
               </div>

            <NavLink className='text-dark ' to="/register"><small>Registration</small></NavLink>
        </div>
    )
}
export default Header;