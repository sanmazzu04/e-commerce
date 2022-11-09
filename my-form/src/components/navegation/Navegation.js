import React from 'react'

import { useRef } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom"
import './Navegation.css'

function Navegation() {

  const navRef = useRef()

  const showNavBar = () =>{
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <>
    <header>
    <h1 className='logo'>logo</h1>
    <nav ref={navRef} className='nav-container'>
            <a><Link to="/Home" >Home</Link></a>
            <a><Link to="/" >Compras</Link></a>
            <a><Link to="/Productos" >Productos</Link></a>
            <a><Link to="/Contactos" >Contactos</Link></a>
            <a><Link to="/probando">hola</Link></a>
      
        <button className='nav-btn nav-close-btn' onClick={showNavBar}>
          <FaTimes/>
        </button>
    </nav>
    <button className='nav-btn' onClick={showNavBar}>
      <FaBars/>
    </button>
    </header>
    </>
  )
}

export default Navegation