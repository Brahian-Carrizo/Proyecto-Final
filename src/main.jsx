import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Components/Navbar.jsx"
import Footer from './Components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(    
    <>
        <Navbar/>
        <Footer/>
    </>
)
