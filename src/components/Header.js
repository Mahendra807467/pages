import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Layout.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;