import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/monday" className="nav-link">Monday</Link></li>
        <li><Link to="/tuesday" className="nav-link">Tuesday</Link></li>
        <li><Link to="/wednesday" className="nav-link">Wednesday</Link></li>
        <li><Link to="/thursday" className="nav-link">Thursday</Link></li>
        <li><Link to="/friday" className="nav-link">Friday</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
