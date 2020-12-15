import React from 'react';
import {useState, useEffect} from "react";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Введіть емейл')
    const [passwordError, setPasswordError] = useState('Введіть пароль')
    const [formValid, setFormValid]=useState(false)

    useEffect(()=> {
        if (emailError || passwordError) {
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) =>{
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Емейл не коректний')
        }else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) =>{
        setPassword (e.target.value)
        if (e.target.value.length < 3 ||e.target.value.length >8){
            setPasswordError ('Пароль повинен бути від 3 до 8')
            if (!e.target.value){
                setPasswordError('Введіть пароль')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }



    return (
        <div className='jumbotron'>
            <form>
                <div className="form-group mx-sm-5 mb-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                    <input type="email" onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className="form-control"
                           aria-describedby="emailHelp"
                           placeholder="Enter email"/>

                </div>
                <div className="form-group mx-sm-5 mb-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    {(passwordError && passwordDirty) && <div style={{color: 'red'}}>{passwordError}</div>}
                    <input type="password" onChange={e=>passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} className="form-control"
                            placeholder="Password"/>
                            <button disabled={!formValid} type='submit'>Login</button>
                </div>
               {/* <NavLink className="nav-link active text-dark form-group mx-sm-5 mb-2" to="/test">Login</NavLink>*/}
            </form>
        </div>
    )
}

export default Login;
