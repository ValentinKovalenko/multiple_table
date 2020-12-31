import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Test from "./Test";
import Register from "./Register";
import Login from "./Login";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return (
            <Switch>
                <Route path ='/test' exact>
                    <Test />
                </Route>
                <Redirect to='/'/>
            </Switch>
                    )
    }
    return (
        <Switch>
            <Route path ='/login' exact>
                <Login />
            </Route>
            <Route path ='/register' exact>
                <Register />
            </Route>
            <Redirect to='/'/>
        </Switch>
    )
}