import React from 'react'
import { NavLink } from 'react-router-dom'

import './Footer.scss'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="foo__top">
        <div className="foo__content foo_top-wrap">
          <NavLink to="/" className="foo__logo-link">
            <img
              src="https://via.placeholder.com/100x50"
              alt="logo"
              className="foo__soc-pic"
            />
          </NavLink>
          <div className="foo__soc">
            <NavLink to="/" className="foo__soc-link">
              <img
                src="https://via.placeholder.com/16x16"
                alt="logo"
                className="foo__soc-pic"
              />
            </NavLink>
            <NavLink to="/" className="foo__soc-link">
              <img
                src="https://via.placeholder.com/16x16"
                alt="logo"
                className="foo__soc-pic"
              />
            </NavLink>
            <NavLink to="/" className="foo__soc-link">
              <img
                src="https://via.placeholder.com/16x16"
                alt="logo"
                className="foo__soc-pic"
              />
            </NavLink>
            <NavLink to="/" className="foo__soc-link">
              <img
                src="https://via.placeholder.com/16x16"
                alt="logo"
                className="foo__soc-pic"
              />
            </NavLink>
          </div>
        </div>
      </div>
      <div className='foo__bot'>
        <div className='foo__bot-wrap foo__content'>
          <div className='foo__nav'>
            <div className='foo__nav-items'>
              <p className='foo__nav-title'>For Applicants</p>
              <NavLink to='/vacancysearch' className='foo__nav-link'>Search for vacancies</NavLink>
              <NavLink to='/signin' className='foo__nav-link'>Post a Resume</NavLink>
            </div>
            <div className='foo__nav-items'>
              <p className='foo__nav-title'>For Employers</p>
              <NavLink to='/resumesearch' className='foo__nav-link'>Search for resume</NavLink>
              <NavLink to='/signin' className='foo__nav-link'>Post a Vacancy</NavLink>
              <NavLink to='/signin' className='foo__nav-link'>Pricing</NavLink>
            </div>
            <div className='foo__nav-items'>
              <p className='foo__nav-title'>Info</p>
              <NavLink to='/contacts' className='foo__nav-link'>Contacts</NavLink>
              <NavLink to='/about' className='foo__nav-link'>About company</NavLink>
            </div>
          </div>
          <div className='foo__copyright-wrap'>
            <p className='foo__copyright'>© 2022 ODO &ldquo;Work for You&ldquo;, UNP 101541485</p>
            <p className='foo__copyright'>Legal address: 220037, Minsk, Kozlova lane, 7G, 7 fl., office 14</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
