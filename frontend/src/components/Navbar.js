// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">TaskMaster</div>
      <div className="navbar-links">
        <Link to="/add-tasks">Add Tasks</Link>
        <Link to="/manage-tasks">Manage Tasks</Link>
      </div>
    </div>
  );
};

export default Navbar;


