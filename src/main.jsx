import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Components/Navbar.jsx"
import Footer from './Components/Footer.jsx';
import Inicio from './Page/Inicio.jsx';
import "./Components/Footer.css";

ReactDOM.createRoot(document.getElementById('root')).render(    
    <>
        <App/>
    </>
)
