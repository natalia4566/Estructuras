import React from 'react';
import { NavLink } from 'react-router-dom';

const NavComponent = ({ links }) => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {links.map((link) => (
          <li key={link.path} className="nav-item">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              exact
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavComponent;
