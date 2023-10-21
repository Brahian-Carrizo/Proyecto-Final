import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Inicio.css'
import './Components/Footer.css'
import Inicio from './Page/Inicio'
import Footer from './Components/Footer'
import "./Components/Footer.css";
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Inicio/>
      <Footer/>
    </div>
  )
}

export default App
