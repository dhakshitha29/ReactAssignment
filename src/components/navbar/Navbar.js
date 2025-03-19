import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <div className='bg-black'>
        <ul className="nav justify-content-end">
  <li className="nav-item fw-bold">
    <NavLink className="nav-link" to="/">Home</NavLink>
  </li>
  <li className="nav-item fw-bold">
    <NavLink className="nav-link" to="signup">Sign up</NavLink>
  </li>
  <li className="nav-item fw-bold">
    <NavLink className="nav-link " to="login">Login</NavLink>
  </li>
  <li className="nav-item fw-bold">
    <NavLink className="nav-link " to="technologies">Technologies</NavLink>
  </li>
</ul>
    </div>
  ) 
}

export default Navbar