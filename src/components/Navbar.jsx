import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import LogoutButton from './LogoutButton'

function Navbar({loggedIn, setCredential}) {
  //const location = useLocation();
  //const url = location.pathname;
  
  return (
    <div className="container mt-4">
      {/* <h2>My catalog</h2> */}
      {loggedIn && <p><NavLink className="a-custom" to="/" >My catalog</NavLink></p>}
      {loggedIn && <NavLink className="a-sub-custom ms-3" to="/dashboard" >Dashboard</NavLink>}
      {loggedIn && <NavLink className="a-sub-custom ms-3" to="/register-movie" >New Movie</NavLink>}
      {loggedIn && <LogoutButton className="btn btn-outline-primary" setCredential={setCredential} />}
      {!loggedIn && <NavLink className="btn bg-login-btn" to="/login" >Login</NavLink>}
    </div>
  )
}

export default Navbar