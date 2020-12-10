import React from 'react'
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import Login from "./pages/Test";
import Register from "./pages/Register";
import Test from "./pages/Test";
import Header from "./pages/Header";
import './App.css';


function App() {
    return (
        <BrowserRouter>
            <div className='container '>
                <Header/>
                <div>
                    {/*<Route path='/login' render={() => <Login/>}/>*/}
                    <Route path='/register' render={() => <Register/>}/>
                    <Route path='/test' render={() => <Test/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
