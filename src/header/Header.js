import React from 'react';
import {NavLink} from 'react-router-dom';
import {getIsActive} from '../shared/nav.helper'
import './header.css';


const Header = () => (
    <div className="header flex">
      <nav className="wrapper flex">
        <NavLink activeClassName="active"
                 isActive={getIsActive}
                 to="/home">Home</NavLink>

        <NavLink activeClassName="active"
                 isActive={getIsActive}
                 to={{ pathname: '/about' }}>About</NavLink>

        <NavLink isActive={getIsActive}
                 activeClassName="active"
                 to={{ pathname: '/contact' }}>Contact</NavLink>
      </nav>
    </div>
);

export default Header;