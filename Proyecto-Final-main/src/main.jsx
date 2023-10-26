import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Inicio from "./Page/Inicio.jsx"
import Navbar from "./Components/Navbar.jsx"
import Footer from './Components/Footer.jsx';
import Body from './Components/Body.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(    
    <>
        <Navbar/>
        <Body/>
        <Footer/>
    </>
)
