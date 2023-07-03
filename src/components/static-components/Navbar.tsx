import { NavLink as RRNavLink } from 'react-router-dom';
import React from 'react';

import ListIcon from '../icons/ListIcon';
import PersonIcon from '../icons/PersonIcon';

const NavLink = RRNavLink as React.FunctionComponent<any>;

function Navbar() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
                <span className="nav-link-content">
                    <ListIcon />
                    <span>List</span>
                </span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/account" activeClassName="active">
                <span className="nav-link-content">
                    <PersonIcon />
                    <span>Account</span>
                </span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
}

export default Navbar;