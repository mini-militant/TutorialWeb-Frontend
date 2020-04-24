import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/navbar.css'

const Navbar=()=>{
  return(
    <div>
      <nav className="navbar fixed-top" id="navbar">
        <a className="navbar-brand" href="#">Tech Curiosity</a>
        <nav>
          <ul>
            <li className="current">
                <Link to='/'>Home</Link></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </nav>
      </nav>
    </div>
  )
}

export default Navbar
