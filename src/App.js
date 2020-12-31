import React from 'react'
import {BrowserRouter, } from 'react-router-dom'
import Header from "./pages/Header";
import './App.css';
import {useRoutes} from "./pages/routes";



function App() {
    const routes = useRoutes(false)
    return (
        <BrowserRouter>
            <div className='container'>
                <Header/>
                {routes}
            </div>
        </BrowserRouter>
    );
}

export default App;
