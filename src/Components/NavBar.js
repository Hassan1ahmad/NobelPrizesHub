import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar(props) {
  const closeNavbar = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    // Check if navbarToggler is displayed (indicating we're in a smaller viewport) 
    // and if the navbar is currently expanded
    if (getComputedStyle(navbarToggler).display !== 'none' && !navbarToggler.classList.contains('collapsed')) {
      navbarToggler.click();
    }
    
  };
  
  
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NobelPrizesHub</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " onClick={closeNavbar}  exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" onClick={closeNavbar}  to="/chemistry">Chemistry</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" onClick={closeNavbar}  to="/physics">Physics</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" onClick={closeNavbar}  to="/economics">Economics</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" onClick={closeNavbar}  to="/literature">Literature</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" onClick={closeNavbar}  to="/search manually">Search Manually</NavLink>
        </li>
      </ul>
            <div class={`form-check text-${props.mode === 'light'? 'dark' : 'light'}`}>
        <input class="form-check-input" type="checkbox"  onClick={props.togglemode} value="" id="flexCheckDefault"/>
        <label class="form-check-label" for="flexCheckDefault">
         Enable Dark Mode
        </label>
      </div>
    </div>
  </div>
</nav>
  )
}
