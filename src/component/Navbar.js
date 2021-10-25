import React from 'react'
import "../App.css"
import logo from '../logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <div className="container">      
  <a className="navbar-brand" href="/" style={{color:"white"}}><img className="logo"src={logo} alt="logo..."></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      
      <li className="nav-item">
        <a className="nav-link" href="/about">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/news">News</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/channels">Tvshows</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
     
      
    </ul>
    
  </div>
  </div> 
</nav>

    )
}

export default Navbar
