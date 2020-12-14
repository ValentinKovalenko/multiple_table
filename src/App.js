import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Register from "./pages/Register";
import Test from "./pages/Test";
import Header from "./pages/Header";
import './App.css';
import Login from "./pages/Login";
import Result from "./pages/Resalt";


function App() {
    return (
        <BrowserRouter>
            <div className='container '>
                <Header/>
                <div>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/register' render={() => <Register/>}/>
                    <Route path='/test' render={() => <Test/>}/>
                    <Route path='/result' render={() => <Result/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
