import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <p>Hola</p>
      <NavLink to="/login" >Login</NavLink>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/dashboard" >Dashboard</NavLink>
    </nav>
  )
}

export default Navbar