import React from 'react'
import { NavLink } from "react-router-dom"

function Nav() {
    return (
      <div className="nav__wrap">
          <div className="nav__logo-wrap">
             <NavLink to="/" className="nav__logo-link"><img src="https://via.placeholder.com/150x100" className="nav__logo" /></NavLink>
          </div>
          <div className="nav__search-wrap">
              <NavLink to="/" className="nav__search-link">Поиск вакансий</NavLink>
              <NavLink to="/" className="nav__search-link">Поиск резюме</NavLink>
          </div>
          <div className="nav__auth-wrap">
                <NavLink to="/" className="nav__auth-link">Регистрация</NavLink>
                <NavLink to="/" className="nav__auth-link">Вход</NavLink>
          </div>
      </div>
    );
  }
  
  export default Nav;
  