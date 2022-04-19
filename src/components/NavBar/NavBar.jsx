import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

const NavBar = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header-content'>
          <div className='logo'>
            <NavLink className='logo-link' to='/'>
              SpaceX
            </NavLink>
          </div>

          <ul className='nav'>
            <li>
              <NavLink
                to='/'
                className={(isActive) => (isActive ? 'active' : '')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='#Solar'>Solar</NavLink>
            </li>
            <li>
              <NavLink to='#Planets'>Launches</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;