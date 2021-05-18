import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../css/Styles.css'
import '../css/Properties.css'
import '../css/Navbar.css'

function Navbar() {

  const [click, setClick] = useState(false);
  
  const handleClick = () => {
    const collapseToggle = document.querySelector('.collapse');
    if(!click) {
      collapseToggle.style.display = "block";
    }

    else {
      collapseToggle.style.display = "none"; 
    }

    setClick(!click)
  }

  return (
  <nav className="navbar flex flex-r w-100">
    <div className="brand-box flex w-20">
      <span className="brand-name">Luv Makin</span>
    </div>
    <div className="nav-space w-20">&nbsp;</div>
    <div className="mobile-button">
      <i className={(!click)?"fas fa-bars":"fas fa-times"} onClick={handleClick}></i>
    </div>
    <div class="collapse flex flex-r w-60">
      <ul className="navbar-nav flex flex-r w-100" id={(click)?"nav-show":"nav-hidden"}>
        <li className="nav-item">
          <Link className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">About</Link>
        </li>
        <li className="nav-item hide">
          <Link className="nav-link">Sign in</Link>
        </li>
        <li className="sign-up nav-item hide">
          <Link className="nav-link no-hover">Sign up</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
