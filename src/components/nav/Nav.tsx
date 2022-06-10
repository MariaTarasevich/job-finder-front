import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav: React.FC = () => {
  return (
    <div className="nav__wrap">
      <div className="nav__logo-wrap">
        <NavLink to="/" className="nav__logo-link">
          <img src="https://via.placeholder.com/100x50" className="nav__logo" alt='logo'/>
        </NavLink>
      </div>
      <div className="nav__search-wrap">
        <NavLink to="/vacancysearch" className="nav__search-link">
          Job search
        </NavLink>
        <NavLink to="/resumesearch" className="nav__search-link">
          Resume Search
        </NavLink>
      </div>
      <div className="nav__auth-wrap">
        <NavLink to="/signup" className="nav__auth-link">
          Sign up
        </NavLink>
        <NavLink to="/signin" className="nav__auth-link">
          Sign in
        </NavLink>
      </div>
    </div>
  )
}

export default Nav
