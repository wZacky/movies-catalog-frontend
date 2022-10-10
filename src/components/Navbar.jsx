import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import LogoutButton from './LogoutButton'

function Navbar({loggedIn, setCredential}) {
  //const location = useLocation();
  //const url = location.pathname;
  
  return (
    <nav>
      <p>Hola</p>
      {loggedIn && <NavLink to="/" >Home</NavLink>}
      {loggedIn && <NavLink to="/dashboard" >Dashboard</NavLink>}
      {loggedIn && <NavLink to="/register-movie" >New Movie</NavLink>}
      {loggedIn && <LogoutButton setCredential={setCredential} />}
      {!loggedIn && <NavLink to="/login" >Login</NavLink>}
    </nav>
  )
}

export default Navbar