import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUserPlus, FaUser,FaComment, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../App.css';


const Header = () => {
  return (
    <header>
      <div className="container">
        {/* <h1>Elite Matrimony</h1> */}
        <ul className="nav-links">
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/about"><FaInfoCircle /> About Us</Link></li>
          <li><Link to="/register"><FaUserPlus /> Register</Link></li>
          <li><Link to="/Support"><FaPhone /> Support</Link></li>
          <li><Link to="/profile"><FaUser /> Profile</Link></li>

          
        </ul>
      </div>
    </header>
  );
};

export default Header;
