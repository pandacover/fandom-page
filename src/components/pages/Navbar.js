import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import '../css/Styles.css';
import '../css/Properties.css'

function Navbar() {
  return (
    <div className="navbar flex flex-c">
      <ul className="navbar-nav flex flex-c w-50">
        <li className="nav-item">
         <Link className="nav-link" to="/"><i className="fas fa-home" /></Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="/"><i className="fas fa-envelope" /></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/"><i className="fab fa-grunt" /></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to=""><i className="fas fa-cog" /></Link>
        </li>
      </ul>
    </div>
  )
}
 
export default Navbar
